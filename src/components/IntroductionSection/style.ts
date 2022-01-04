import styled from "styled-components";

export const Container = styled.div`
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
  }
`;
