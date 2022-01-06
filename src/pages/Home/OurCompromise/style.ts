import styled from "styled-components";

export const Container = styled.section`
  padding: 80px 15px 100px 15px;
`;

export const ContainerCompromisse = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 55px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
