import styled, { keyframes } from "styled-components";
import { fadeRight, fadeBottom } from "../../../styles/globalStyles";


const circleScale = keyframes`
    to {
        transform: translateX(50%) translateY(30%) scale(1);
    }
`;

const studentUp = keyframes`
    to {
        transform: translateY(0%) ;
    }
`;

export const Container = styled.section`
  height: max(70vh, 600px);
  position: relative;
  clip-path: polygon(0 0, 100% 0%, 100% 90%, 0% 100%);

  overflow: hidden;

  .content {
    padding: 100px 0px 50px 0px;
    

    h1 {
      color: ${(p) => p.theme.colors.black3};
      font-size: min(57px, 8vw);
      line-height: 66px;
      transition: all .5s;
      animation: ${fadeRight} 0.8s forwards;

      span {
        color: ${(p) => p.theme.colors.primary};
      }
    }

    > p {
      margin-top: 40px;
      font-weight: 500;
      font-size: 22px;
      line-height: 38px;
      color: ${(p) => p.theme.colors.gray};
      width: 50%;
      opacity: 0;
      animation: ${fadeRight} 0.8s 0.4s forwards;
      /* animation-delay: 0.8s; */

    }

    > a {
      width: 25%;
      margin-top: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      background-color: ${(p) => p.theme.colors.primary};
      padding: 20px 15px 20px 35px;

      border-radius: 8px;
      transition: all 0.5s;
      opacity: 0;

      animation: ${fadeBottom} 0.8s 0.8s forwards;
      cursor: pointer;

      p {
        color: ${(p) => p.theme.colors.white};
        font-weight: 500;
        font-size: 22px;
      }

      svg {
        fill: #37474f;
      }

      &:hover {
        filter: brightness(0.8);
        /* background-color: #4654fd; */
      }
    }
  }

  .student {
    position: absolute;
    right: 70px;
    bottom: 0px;
    z-index: 11;
    transition: all 0.5s;
    transform: translateY(100%);
    animation: ${studentUp} 0.8s forwards;
  }

  .circle {
    background-color: #8471ff;
    position: absolute;
    height: 581px;
    width: 1030px;
    right: 0;
    bottom: 0;

    z-index: 10;
    border-radius: 75%;
    transform: translateX(40%) translateY(30%) scale(0);

    transition: all 0.5s;

    animation: ${circleScale} 0.8s forwards;
  }

  @media (max-width: 1080px) {
    .student {
      right: 0px;
    }

    .circle {
      transform: translateX(40%) translateY(30%) scale(0);

    }
  }

  @media(max-width: 980px) {
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);



    .content {
      a {
        width: 40%;
      }
    }

  }
  
  @media (max-width: 768px) {

    height: 70vh;
    display: flex;
    align-items: center;

    .content {
      padding: 0px;

      > p {
        width: 75%;
      }

      > a {
        width: 60%;
      }
    }
  }

  @media (max-width: 520px){
    .content {
      h1 {
        line-height: 50px;
      }

      > p {
        font-size: 18px;
        width: 100%;
      }

      > a {
        width: 75%;
      }
    }
  }
`;
