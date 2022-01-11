import React, { useEffect, useState } from "react";
import { Link, animateScroll } from "react-scroll";
import Lottie from 'react-lottie';
import * as animationData from './animation.json'

import { Container } from "./style";

// Components
import { Logo } from "../Logo";
import { useMedia } from "../../hooks/useMedia";

export const Header = () => {
  const [scrollInTop, setScrollOnTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false)
  const [animationState, setAnimationState] = useState({
    isStopped: true, isPaused: false, direction: -1
  })

  const match = useMedia('(max-width: 820px)')

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

    function handleWindowScroll() {
      const isScrolling = window.scrollY > 50 ? true : false;
      setScrollOnTop(isScrolling);
    }
  }, [scrollInTop]);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  function handleClickOpenMenu() {
    const normalDirection = 1
    const reverseDirection = -1

    setAnimationState({
      ...animationState,
      isStopped: false,
      direction: animationState.direction === normalDirection ? reverseDirection : normalDirection
    })

    setMenuOpen(!menuOpen)
  }

  function closeMenu() {
    setMenuOpen(false)

    setAnimationState({
      ...animationState,
      isStopped: false,
      direction: -1
    })
  }

  if (match) {
    return (
      <Container className={`mb ${scrollInTop ? "active" : ""}`}>
        <div className="container">
          <Logo onClick={() => animateScroll.scrollToTop()} />

          <button onClick={handleClickOpenMenu}>
            <div className="menu">
              <Lottie options={defaultOptions}
                height={50}
                width={50}
                speed={4}
                style={{ fill: 'white' }}
                direction={animationState.direction}
                isStopped={animationState.isStopped}
                isPaused={animationState.isPaused} />
            </div>
          </button>

          <nav style={{ left: menuOpen ? '0%' : '-100%' }}>
            <Link to="home" smooth offset={-30} onClick={closeMenu}>
              Home
            </Link>
            <Link to="compromisses" smooth offset={-30} onClick={closeMenu}>
              Compromisso
            </Link>
            <Link to="news" smooth offset={-30} onClick={closeMenu}>
              Notícias
            </Link>
            <Link to="schedules" smooth offset={-30} onClick={closeMenu}>
              Agenda
            </Link>
          </nav>
        </div>
      </Container>
    )
  }

  return (
    <Container className={scrollInTop ? "active" : ""}>
      <div className="container">
        <Logo onClick={() => animateScroll.scrollToTop()} />

        <nav>
          <Link to="home" smooth offset={-30}>
            Home
          </Link>
          <Link to="compromisses" smooth offset={-30}>
            Compromisso
          </Link>
          <Link to="news" smooth offset={-30}>
            Notícias
          </Link>
          <Link to="schedules" smooth offset={-30}>
            Agenda
          </Link>
        </nav>
      </div>
    </Container>
  );
};
