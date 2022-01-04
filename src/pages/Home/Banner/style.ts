import styled, { keyframes } from "styled-components";

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
  height: 70vh !important;
  position: relative;
  clip-path: polygon(0 0, 100% 0%, 100% 90%, 0% 100%);

  overflow: hidden;

  .content {
    padding: 100px 0px 50px 0px;
    h1 {
      color: ${(p) => p.theme.colors.black3};
      font-size: 56px;
      line-height: 66px;

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
    }

    > button {
      width: 25%;
      margin-top: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      background-color: ${(p) => p.theme.colors.primary};
      padding: 20px 15px 20px 35px;

      border-radius: 8px;
      transition: all 0.5s;

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
    right: 100px;
    top: 120px;
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
    transform: translateX(50%) translateY(30%) scale(0);

    transition: all 0.5s;

    animation: ${circleScale} 0.8s forwards;
  }
`;
