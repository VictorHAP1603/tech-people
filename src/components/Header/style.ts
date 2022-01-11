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
    cursor: pointer;

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
    transition: all .4s;

    a {
      margin: 0 10px;
      padding: 0 15px;
      font-size: 17px;
      font-weight: 500;
      position: relative;
      width: fit-content;
      display: block;
      cursor: pointer;  
      transition: all .4s;
      

      &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0%;
        height: 2px;
        background-color: ${(p) => p.theme.colors.black};
        transition: all 0.4s;
      }

      &:hover {
        &::after {
          width: 100%;
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
      a {
        color: ${(p) => p.theme.colors.white};
        height: 100%;
        transition: all 0.4s;
        display: flex;
        align-items: center;

        &::after {
          content: "";
          display: none;
        }

        &:hover {
          background-color: ${(p) => p.theme.colors.primary};
          filter: brightness(0.8);
        }
      }
    }
  }

  &.mb {

    .logo {
      width: 50%;

      img {
        width: 150px;
        object-fit: contain;
      }
    }

    nav {
      position: absolute;
      top: 110px;
      flex-direction: column;
      width: 100%;
      transition: all .4s;

      a {
        background-color: white;
        display: block;
        width: 100%;
        text-align: center;
        padding: 50px 0;
        border-top: 2px solid ${p => p.theme.colors.black};

        &:last-child {
          border-bottom: 2px solid ${p => p.theme.colors.black};
        }
      }
    }

    button {
      width: 100px;
      height: 100%;
      /* background-color: black; */

      .menu {
        color: white;
        pointer-events: none;
        transform: scale(.8);
      }

    }

    &.active {

      nav {
        top: 90px;

        a {
          color: ${p => p.theme.colors.black};
          border-top: 2px solid ${p => p.theme.colors.primary};

          &:last-child {
          border-bottom: 2px solid ${p => p.theme.colors.primary};
        }
        }
      }

      button {
        svg {
          path {
            stroke: ${p => p.theme.colors.white};
          }
        }
      }
    }
  }

  
`;
