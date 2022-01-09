import styled from "styled-components";

export const Container = styled.header`
  height: 110px;
  transition: all 0.4s;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    height: 100%;
    display: flex;
    align-items: center;
    transition: all 0.4s;

    img {
      height: 60%;
      transition: all 0.4s;
      display: block;
    }
  }

  nav {
    height: 100%;
    display: flex;
    align-items: center;

    button {
      margin: 0 10px;
      padding: 0 15px;
      font-size: 17px;
      font-weight: 500;
      position: relative;
      width: fit-content;

      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width:  0%;
        height: 2px;
        background-color: ${p => p.theme.colors.black};
        transition: all .4s;
      }

      &:hover {
        &::after {
          width:  100%;
        }
      }
    }
  }

  &.active {
    background-color: ${(p) => p.theme.colors.primary};
    height: 90px;

    .logo {
      img {
        filter: invert(100%);
      }
    }

    nav {
      button {
        color: ${(p) => p.theme.colors.white};
        height: 100%;
        transition: all .4s;

        &::after {
        content: '';
          display: none;
        }

        &:hover {
          background-color: ${p => p.theme.colors.primary};
          filter: brightness(.8);
        }
      }
    }
  }
`;
