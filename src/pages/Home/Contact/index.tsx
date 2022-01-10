import React from "react";
import { FaArrowRight } from "react-icons/fa";

import { Container } from "./style";

export const Contact = () => {
  return <Container>
    <div className="container">
      <div className="header">
        <h2>Preparado para fazer parte da nossa iniciativa?</h2>
        <p>Preencha todos os campos para que possamos entrar em contato.</p>
      </div>

      <form>
        <input type="text" placeholder="Nome Completo" />
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Telefone celular" />

        <button>
          <p>Cadastra-se</p>
          <FaArrowRight size={18} />
        </button>
      </form>

    </div>
  </Container>;
};
