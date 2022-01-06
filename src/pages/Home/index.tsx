import React from "react";

import { Container } from "./style";

// Sections
import { Banner } from "./Banner";
import { OurCompromisse } from "./OurCompromise";
import { News } from "./News";

export const Home = () => {
  return (
    <Container>
      <Banner />
      <OurCompromisse />
      <News />
    </Container>
  );
};
