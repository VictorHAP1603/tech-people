import React, { ReactNode } from "react";

import { Container } from "./style";

type Props = {
  title: string;
  children: ReactNode;
};

export const IntroductionSection = ({ title, children }: Props) => {
  return (
    <Container>
      <h2>{title}</h2>
      <p>{children}</p>
    </Container>
  );
};
