import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  /* width: 48%; */
  width: 48%;
  padding: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  flex-shrink: 0;
  margin: 0 1%;

  .header {
    display: flex;
    align-items: center;

    .date {
      text-transform: capitalize;
      padding: 15px 25px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      background-color: ${(p) => p.theme.colors.purple};
      border-radius: 11px;

      margin-right: 20px;

      span {
        color: ${(p) => p.theme.colors.primary};
      }

      .day {
        font-size: 27px;
        font-weight: 700;
      }

      .month {
        font-size: 18px;
        font-weight: 900;
      }
    }

    > p {
      font-weight: 700;
      color: ${(p) => p.theme.colors.gray2};
      line-height: 37px;
      font-size: 24px;
    }
  }

  > p {
    font-weight: 500;
    color: ${(p) => p.theme.colors.gray2};
    opacity: 0.73;
    line-height: 28px;
    font-size: 16px;
    margin: 26px 0px;
  }

  .footer {
    display: flex;
    justify-content: space-between;

    button {
      display: flex;
      align-items: center;
      position: relative;

      p {
        color: ${(p) => p.theme.colors.primary};
        font-weight: 700;
        font-size: 17px;
        margin-right: 25px;
      }

      svg {
        fill: ${(p) => p.theme.colors.gray2};
        transition: all 0.4s;
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;

        height: 2px;
        width: 0%;
        display: block;
        transition: all 0.4s;
        background-color: ${(p) => p.theme.colors.primary};
      }

      &:hover {
        svg {
          transform: translateX(5px);
        }

        &:after {
          width: 100%;
        }
      }
    }

    > div {
      display: flex;
      align-items: center;

      svg {
        fill: ${(p) => p.theme.colors.black};
      }

      span {
        margin-left: 10px;
        color: ${(p) => p.theme.colors.black};
        font-weight: 900;
      }
    }
  }

  @media (max-width: 800px) {
    width: 98%;
  }

  @media (max-width: 450px) {
    .header {
      flex-direction: column;

      .date {
        width: 50%;
        margin-right: 0px;
        margin-bottom: 20px;

      }

      > p {
        text-align: center;
      }
    }

    > p {
      text-align: justify;
    }

    .footer {
      flex-direction: column;

      > div {
        order: 1;
        justify-content: center;
        margin-bottom: 20px;
      }

      button {
        order: 2;
        background-color: ${p => p.theme.colors.primary};
        justify-content: center;
        padding: 20px;
        border-radius: 8px;

        p {
          color: ${p => p.theme.colors.white};
        }

        &:after {
          display: none;
        }
      }
    }
  }
`;
