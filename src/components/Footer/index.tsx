import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import { Container } from "./style";

// Components
import { Logo } from "../Logo";

export const Footer = () => {
  return (
    <Container>
      <div className="container">
        <div className="left-side">
          <Logo />
          <div>
            <p>Iniciativa Pessoas de Tech</p>
            <p>Todos os direitos reservados</p>
          </div>
        </div>

        <nav>
          <a
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100003250275126"
            target="_blank"
          >
            <FaFacebookF />
          </a>

          <a
            rel="noreferrer"
            href="https://twitter.com/VictorH24158462"
            target="_blank"
          >
            <FaTwitter />
          </a>

          <a
            rel="noreferrer"
            href="https://www.instagram.com/vitao_1603/"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </nav>
      </div>
    </Container>
  );
};
