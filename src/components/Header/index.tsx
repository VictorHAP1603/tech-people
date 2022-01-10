import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll'

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
          <Link to="home" smooth offset={-30}>Home</Link>
          <Link to="compromisses" smooth offset={-30}>Compromisso</Link>
          <Link to="news" smooth offset={-30}>Notícias</Link>
          <Link to="schedules" smooth offset={-30}>Agenda</Link>
        </nav>

      </div>
    </Container>
  );
};
