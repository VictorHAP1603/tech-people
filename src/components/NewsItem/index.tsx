import React from "react";
import { FaCalendar } from "react-icons/fa";
import { GetNewsProps } from "../../pages/Home/News";

import { Container } from "./style";

type Props = {
  data: GetNewsProps;
};

export const NewsItem = ({ data }: Props) => {
  const { createdAt, src, title } = data;

  return (
    <Container>
      <div className="image">
        <img src={src} alt="Notícia" />
      </div>

      <div className="content">
        <span>
          <FaCalendar />
          {createdAt}
        </span>

        <p>{title}</p>
      </div>
    </Container>
  );
};
