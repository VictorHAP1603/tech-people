import React from "react";

import { Container, ContainerCompromisse } from "./style";

// Components
import { IntroductionSection } from "../../../components/IntroductionSection";
import {
  CompromisseItem,
  CompromisseItemProps,
} from "../../../components/CompromisseItem";

// Images
import ImgPlaylistCheck from "../../../assets/images/compromisses/playlist_add_check.svg";
import ImgSchool from "../../../assets/images/compromisses/school.svg";
import ImgStar from "../../../assets/images/compromisses/star.svg";
import ImgTimerOff from "../../../assets/images/compromisses/timer_off.svg";
import ImgToys from "../../../assets/images/compromisses/toys.svg";
import ImgWork from "../../../assets/images/compromisses/work.svg";

const compromisses: CompromisseItemProps[] = [
  {
    color: "primary",
    src: ImgStar,
    title: "Avaliar positivamente",
    text: "Entendemos que você está aprendendo. A gente também passou por esta fase, e sabemos que as coisas mudam muito rápido.",
    alt: "Estrela",
  },

  {
    color: "orange",
    src: ImgSchool,
    title: "Apoio pós-desafio",
    text: "Você saberá como está evoluindo, e nós aprendemos a deixar o nosso processo avaliativo mais seguro e de confiança.",
    alt: "Chapéu de formatura",
  },

  {
    color: "green",
    src: ImgPlaylistCheck,
    title: "Avaliar o que faz sentido",
    text: "Nada de algoritmo de número primo ou de árvore binária. Nossos desafios se basearam no que você irá realmente trabalhar no futuro.",
    alt: "Check",
  },

  {
    color: "blue",
    src: ImgToys,
    title: "Liberdade na escolha",
    text: "Temos nossas preferências, mas a decisão de qual tecnologia você quer fazer o desafio fica a seu critério.",
    alt: "Toy",
  },

  {
    color: "orange",
    src: ImgTimerOff,
    title: "Nada de prazos irreais",
    text: "Temos nossa rotina de trabalho, família e vida pessoal. Faça no seu tempo. Corrigiremos no nosso tempo também! :)",
    alt: "Timer Off",
  },

  {
    color: "green",
    src: ImgWork,
    title: "Contra o apagão da TI",
    text: "Se você for bem neste desafio, vamos ter prazer em te indicar para vagas em empresas parceiras. Não temos vagas, mas temos um networking gigantesco.",
    alt: "Work",
  },
];

export const OurCompromisse = () => {
  return (
    <Container className="container">
      <IntroductionSection title="Nosso Compromisso" delay={1}>
        Temos um compromisso de fazer desafios e gerar avaliações precisas para
        que você saiba o quanto está evoluíndo. Acreditamos que você merece uma
        avaliação justa e precisa do seu processo.
      </IntroductionSection>

      <ContainerCompromisse>
        {compromisses.map((data) => (
          <CompromisseItem key={data.alt} data={data} />
        ))}
      </ContainerCompromisse>
    </Container>
  );
};
