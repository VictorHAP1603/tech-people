import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const spinner = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled(motion.section)`
  padding: 80px 0px 100px 0px !important;
  background-color: ${(p) => p.theme.colors.background};

  .header {
    margin-bottom: 35px;

    h2 {
      font-size: 37px;
      font-weight: 700;
      color: ${(p) => p.theme.colors.black};
    }

    p {
      font-weight: 400;
      font-size: 18px;
      color: ${(p) => p.theme.colors.gray2};
      opacity: 0.73s;
      margin-top: 15px;
    }
  }

  form {
    display: flex;

    input,
    button {
      display: block;
      flex: 1;
      border-radius: 8px;
      transition: all 0.4s;
    }

    input {
      border: 1px solid #dedede;
      outline: none;
      padding: 20px;
      color: rgba(55, 71, 79, 0.85);
      font-size: 18px;

      &:focus {
        border: 2px solid #909090;
      }

      &::placeholder {
        color: ${(p) => p.theme.colors.gray2};
        opacity: 0.5;
        font-size: 18px;
      }

      & + input {
        margin-left: 30px;
      }

      &.error {
        border: 2px solid ${(p) => p.theme.colors.danger};
        background-color: #f9ecec;
      }
    }

    button {
      margin-left: 30px;
      margin-right: 10px;
      background-color: ${(p) => p.theme.colors.primary};
      color: ${(p) => p.theme.colors.white};

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0px 20px;
      transition: all 0.4s;

      p {
        font-size: 22px;
      }

      svg {
        fill: ${(p) => p.theme.colors.gray2};
      }

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  .loading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg {
      animation: ${spinner} 1s infinite;
      /* transition: all 0.5s; */
    }

    p {
      margin-top: 15px;
      font-weight: 700;
      font-size: 24px;
    }
  }

  .success {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      font-weight: 700;
      font-size: 37px;
      color: ${(p) => p.theme.colors.black};
    }

    .text {
      color: rgba(55, 71, 79, 0.72);
      font-size: 18px;
      margin: 10px 0px 40px 0px;
    }

    button {
      background-color: ${(p) => p.theme.colors.primary};
      color: ${(p) => p.theme.colors.white};
      padding: 15px 40px;
      border-radius: 10px;
      font-size: 18px;

      transition: all 0.4s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }


  @media (max-width: 1080px) {
    form {
      flex-direction: column;
        input, button {
          width: 100%;
        }

        input {
          & + input {
          margin-left: 0px;
          margin-top: 30px;
        }
        }

        button {
          margin-left: 0px;
          margin-top: 30px;
          padding: 20px;

        }

    }

  }
`;
