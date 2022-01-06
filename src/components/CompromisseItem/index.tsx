import React from "react";

import { Container } from "./style";

export type CompromisseItemProps = {
  color: "primary" | "orange" | "blue" | "green";
  src: string;

  title: string;
  text: string;
  alt: string;
}

type Props = {
  data: CompromisseItemProps
}

export const CompromisseItem = ({ data }: Props) => {
  const { color, src, text, title, alt } = data


  return (
    <Container color={color}>
      <div className="image" >
        <img src={src} alt={alt} />
      </div>

      <p className="title">{title}</p>
      <p className="text">{text}</p>
    </Container>
  )
};
