import styled from "styled-components";

export const Container = styled.section`
  padding: 80px 15px 100px 15px;
  background-color: ${(p) => p.theme.colors.background};
`;

export const NewsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    width: 30%;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    > div {
      width: 100%;


      & + div {
        margin-top: 60px;
      }
    }
  }
`;
