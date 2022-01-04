import React from "react";

import { Container } from "./style";

// Components
import { IntroductionSection } from "../../../components/IntroductionSection";

export const OurCompromisse = () => {
  return (
    <Container className="container">
      <IntroductionSection title="Nosso Compromisso">
        Temos um compromisso de fazer desafios e gerar avaliações precisas para
        que você saiba o quanto está evoluíndo. Acreditamos que você merece uma
        avaliação justa e precisa do seu processo.
      </IntroductionSection>
    </Container>
  );
};
