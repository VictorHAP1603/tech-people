import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FaCalendar } from "react-icons/fa";
import { formatDate } from "../../helpers/formatDate";
import { GetNewsProps } from "../../pages/Home/News";

import { Container } from "./style";

type Props = {
  data: GetNewsProps;
};

const variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.6, 0.05, -0.1, 0.9] },
  },
  hidden: { opacity: 0, x: -30 },
};

export const NewsItem = ({ data }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });
  const controls = useAnimation();

  const { createdAt, src, title } = data;

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
      <div className="image">
        <img src={src} alt="Notícia" loading="lazy" />
      </div>

      <div className="content">
        <span>
          <FaCalendar size={24} />
          {formatDate(createdAt)}
        </span>

        <p>{title}</p>
      </div>
    </Container>
  );
};
