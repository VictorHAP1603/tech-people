import React, { ReactNode, useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Container } from "./style";

type Props = {
  title: string;
  children: ReactNode;
  delay?: number;
};

const variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.6, 0.05, -0.1, 0.9] },
  },
  hidden: { opacity: 0, x: -30 },
};

export const IntroductionSection = ({ title, children, delay }: Props) => {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <Container
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={controls}
    >
      <h2>{title}</h2>
      <p>{children}</p>
    </Container>
  );
};
