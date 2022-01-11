import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { Link } from 'react-scroll'
import { useMedia } from "../../../hooks/useMedia";

import { Container } from "./style";

// Images
import ImgStudent from "../../../assets/images/student.png";

export const Banner = () => {

  const match = useMedia('(max-width: 1080px)')

  return (
    <Container id="home" className="container">
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

        <Link to="compromisses" smooth offset={-30} >
          <p>Participar</p>
          <FaArrowDown size={18} />
        </Link>
      </div>

      {!match && (
        <>
          <div className="student">
            <img src={ImgStudent} alt="Estudante" loading="lazy" />
          </div>
          <div className="circle"></div>
        </>
      )}
    </Container>
  );
};
