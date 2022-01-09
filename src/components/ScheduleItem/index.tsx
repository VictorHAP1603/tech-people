import React from "react";
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
}

type Props = {
  data: ScheduleItemProps
}

export const ScheduleItem = ({ data }: Props) => {
  const { appointedDay, finalTime, startTime, text, title } = data

  const { day, month } = formatDateSchedule(appointedDay)

  return <Container>
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

      <span>
        <FaClock />
        <time>{startTime} - {finalTime}</time>
      </span>

    </div>
  </Container>;
};
