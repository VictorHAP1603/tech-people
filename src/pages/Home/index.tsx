import React from "react";

import { Container } from "./style";

// Sections
import { Banner } from "./Banner";
import { OurCompromisse } from "./OurCompromise";

export const Home = () => {
  return (
    <Container>
      <Banner />
      <OurCompromisse />
    </Container>
  );
};
