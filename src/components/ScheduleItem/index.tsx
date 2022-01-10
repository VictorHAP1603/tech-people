import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FaArrowRight, FaClock } from "react-icons/fa";
import { formatDateSchedule } from "../../helpers/formatDate";

import { Container } from "./style";

export type ScheduleItemProps = {
  id: number;
  title: string;
  text: string;
  appointedDay: string;
  startTime: string;
  finalTime: string;
};

type Props = {
  data: ScheduleItemProps;
};

const variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.6, 0.05, -0.1, 0.9] },
  },
  hidden: { opacity: 0, x: -30 },
};

export const ScheduleItem = ({ data }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const controls = useAnimation();

  const { appointedDay, finalTime, startTime, text, title } = data;
  const { day, month } = formatDateSchedule(appointedDay);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <Container
      ref={ref}
      variants={variants}
      animate={controls}
      initial="hidden"
    >
      <div className="header">
        <div className="date">
          <span className="day">{day}</span>
          <span className="month">{month}</span>
        </div>
        <p>{title}</p>
      </div>

      <p>{text}</p>

      <div className="footer">
        <button>
          <p>Participar</p>
          <FaArrowRight size={18} />
        </button>

        <div>
          <FaClock />
          <span>
            {startTime} - {finalTime}
          </span>
        </div>
      </div>
    </Container>
  );
};
