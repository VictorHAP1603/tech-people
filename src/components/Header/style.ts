import styled from "styled-components";

export const Container = styled.header`
  height: 13vh;
  transition: all 0.4s;
  position: sticky;
  top: 0;
  z-index: 99;

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
      margin: 0 5px;
      padding: 0 15px;
      font-size: 17px;
      font-weight: 500;
    }
  }

  &.active {
    background-color: ${(p) => p.theme.colors.primary};
    height: 10vh;

    .logo {
      img {
        filter: invert(100%);
      }
    }

    nav {
      button {
        color: ${(p) => p.theme.colors.white};
      }
    }
  }
`;
