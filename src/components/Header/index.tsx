import React, { useEffect, useState } from "react";

import { Container } from "./style";

// Components
import { Logo } from "../Logo";

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
        <Logo />

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
