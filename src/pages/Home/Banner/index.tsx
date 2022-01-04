import React from "react";
import { FaArrowDown } from "react-icons/fa";

import { Container } from "./style";

// Images
import ImgStudent from "../../../assets/images/student.png";

export const Banner = () => {
  return (
    <Container className="container">
      <div className="content">
        <h1>
          Somos um servidor <br />
          <span>focado em transição de</span> <br />
          carreira
        </h1>

        <p>
          Temos desafios, lives, eventos, tiramos dúvidas e até achamos uma
          colocação para você. Quer fazer parte? Clique no botão abaixo:
        </p>

        <button>
          <p>Participar</p>
          <FaArrowDown size={18} />
        </button>
      </div>

      <div className="student">
        <img src={ImgStudent} alt="Estudante" loading="lazy" />
      </div>

      <div className="circle"></div>
    </Container>
  );
};
