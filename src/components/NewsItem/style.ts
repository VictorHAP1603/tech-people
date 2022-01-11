import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  .image {
    transition: all 0.4s;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

    img {
      width: 100%;
    }
  }

  .content {
    padding: 30px 25px;

    span {
      display: flex;
      align-items: center;

      color: #656465;
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 18px;
      text-transform: capitalize;

      svg {
        fill: #565656;
        margin-right: 14px;
      }
    }

    p {
      color: #656465;
      font-weight: 500;
      font-size: 22px;
      line-height: 26px;
    }
  }

  &:hover {
    cursor: pointer;
    .image {
      clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
      opacity: 0.7;
    }
  }
`;
