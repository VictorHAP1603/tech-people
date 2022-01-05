import React, { ReactNode } from "react";

import { Container } from "./style";

type Props = {
  title: string;
  children: ReactNode;
  delay?: number
};

export const IntroductionSection = ({ title, children, delay }: Props) => {
  return (
    <Container className={delay ? "fade" : ""}>
      <h2>{title}</h2>
      <p>{children}</p>
    </Container>
  );
};
