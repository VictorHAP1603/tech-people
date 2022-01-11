import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${(p) => p.theme.colors.primary};
  padding: 40px 0;

  display: flex;
  align-items: center;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left-side {
    display: flex;
    align-items: center;

    .logo {
      height: 110px;
      width: 110px;

      display: flex;
      align-items: center;
      margin-right: 45px;

      img {
        filter: invert(100%);
      }
    }

    div {
      p {
        color: ${(p) => p.theme.colors.gray3};
        font-weight: 500;
        font-size: 18px;
        line-height: 26px;
      }
    }
  }

  nav {
    a {
      margin: 0px 10px;
      transition: all 0.4s;
      display: inline-block;

      svg {
        fill: ${(p) => p.theme.colors.gray3};
      }

      &:hover {
        transform: scale(1.5);
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }

    nav {
      margin-top: 15px;
      a {
        padding: 10px 30px;
        margin: 0 10px;
      }
    }
  }
`;
