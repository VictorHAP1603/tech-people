import React, { useEffect, useState } from "react";

import { Container } from "./style";

import Logo from "../../assets/images/logo.svg";

export const Header = () => {
  const [scrollInTop, setScrollOnTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

    function handleWindowScroll() {
      const isScrolling = window.scrollY > 50 ? true : false;
      setScrollOnTop(isScrolling);
    }
  }, [scrollInTop]);

  return (
    <Container className={scrollInTop ? "active" : ""}>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo Tech People Dark" />
        </div>

        <nav>
          <button>Home</button>
          <button>Compromisso</button>
          <button>Notícias</button>
          <button>Agenda</button>
        </nav>
      </div>
    </Container>
  );
};
