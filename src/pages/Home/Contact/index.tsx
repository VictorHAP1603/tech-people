import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import InputMask from "react-input-mask";

import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Container } from "./style";

const variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.6, 0.05, -0.1, 0.9] },
  },
  hidden: { opacity: 0, x: -30 },
};

export const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <Container
      ref={ref}
      animate={controls}
      variants={variants}
      initial="hidden"
    >
      <div className="container">
        <div className="header">
          <h2>Preparado para fazer parte da nossa iniciativa?</h2>
          <p>Preencha todos os campos para que possamos entrar em contato.</p>
        </div>

        <form>
          <input type="text" placeholder="Nome Completo" />
          <input type="text" placeholder="E-mail" />
          <InputMask
            mask="(99) 99999-9999"
            type="text"
            placeholder="Telefone celular"
          />

          <button>
            <p>Cadastra-se</p>
            <FaArrowRight size={18} />
          </button>
        </form>
      </div>
    </Container>
  );
};
