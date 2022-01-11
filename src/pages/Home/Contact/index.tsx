import React, { useEffect, useState } from "react";
import { FaArrowRight, FaSpinner } from "react-icons/fa";
import InputMask from "react-input-mask";

import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm, SubmitHandler } from "react-hook-form";

import { Container } from "./style";

type ContactFormDate = {
  email: string;
  name: string;
  celphone: string;
};

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
    threshold: 0.5,
  });

  const [loading, setLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const controls = useAnimation();
  const { register, handleSubmit, formState, resetField } = useForm();

  const { errors } = formState;

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const handleSubmitContact: SubmitHandler<ContactFormDate> = async (
    values: ContactFormDate
  ) => {
    // aqui seria onde mandaria o email atraves da api
    console.log(values);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsFinished(true);

      resetField("name")
      resetField("email")
      resetField("celphone")
    }, 3000);
  };

  if (loading) {
    return (
      <Container>
        <div className="loading container">
          <FaSpinner size={42} />
          <p>Carregando...</p>
        </div>
      </Container>
    );
  }

  if (isFinished) {
    return (
      <Container>
        <div className="container success">
          <p className="title">Sucesso!</p>
          <p className="text">Logo iremos responder o seu contato.</p>
          <button onClick={() => setIsFinished(false)}>fechar</button>
        </div>
      </Container>
    );
  }

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

        <form onSubmit={handleSubmit(handleSubmitContact)}>
          <input
            className={errors.name && "error"}
            type="text"
            placeholder="Nome Completo"
            {...register("name", { required: true })}
          />

          <input
            className={errors.email && "error"}
            type="text"
            placeholder="E-mail"
            {...register("email", {
              required: true,
              pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.([a-z]+))?$/i,
            })}
          />

          <InputMask
            className={errors.celphone && "error"}
            mask="(99) 99999-9999"
            type="text"
            placeholder="Telefone celular"
            {...register("celphone", {
              required: true,
              pattern: /^\([1-9]{2}\) (9[1-9])[0-9]{3}-[0-9]{4}$/,
            })}
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
