import React from "react";

import { Container } from "./style";

// Sections
import { Banner } from "./Banner";
import { OurCompromisse } from "./OurCompromise";
import { News } from "./News";
import { OurSchedule } from "./OurSchedule";
import { Contact } from "./Contact";

export const Home = () => {
  return (
    <Container>
      <Banner />
      <OurCompromisse />
      <News />
      <OurSchedule />
      <Contact />
    </Container>
  );
};
