import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import { Container } from "./style";

export type CompromisseItemProps = {
  color: "primary" | "orange" | "blue" | "green";
  src: string;

  title: string;
  text: string;
  alt: string;
};

type Props = {
  data: CompromisseItemProps;
  index: number;
};

const variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.1, ease: [0.6, 0.05, -0.1, 0.9] },
  },
  hidden: { opacity: 0, x: -30 },
  hover: { y: -10 }
};

export const CompromisseItem = ({ data, index }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const controls = useAnimation();

  const { color, src, text, title, alt } = data;

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <Container
      color={color}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}

    >
      <div className="image">
        <img src={src} alt={alt} />
      </div>

      <p className="title">{title}</p>
      <p className="text">{text}</p>
    </Container>
  );
};
