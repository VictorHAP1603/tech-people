import React from "react";

import { Container } from "./style";

export type CompromisseItemProps = {
  color: "primary" | "orange" | "blue" | "green";
  Image: React.ElementType;

  title: string;
  text: string;
}

type Props = {
  data: CompromisseItemProps
}

export const CompromisseItem = ({ data }: Props) => {
  const { color, Image, text, title } = data

  return <Container>
    <div>
      <Image />
    </div>

    <p className="title"></p>
    <p className="text"></p>
  </Container>;
};
