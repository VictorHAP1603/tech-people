import styled from "styled-components";
import { motion } from "framer-motion";

import { fadeBottom } from "../../styles/globalStyles";

export const Container = styled(motion.div)`
  text-align: center;

  h2 {
    font-weight: 700;
    font-size: 37px;
    line-height: 54px;
    margin-bottom: 25px;
    color: ${(p) => p.theme.colors.black};
  }

  p {
    font-weight: 500;
    font-size: 22px;
    line-height: 38px;
    color: ${(p) => p.theme.colors.gray};
    margin-bottom: 75px;
  }

  &.fade {
    h2 {
      opacity: 0;
      animation: ${fadeBottom} 0.8s 1.2s forwards;
    }

    p {
      opacity: 0;
      animation: ${fadeBottom} 0.8s 1.5s forwards;
    }
  }
`;
