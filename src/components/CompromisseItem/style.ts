import styled from "styled-components";

type PropsContainer = {
    color: "primary" | "orange" | "blue" | "green";

}

export const Container = styled.div<PropsContainer>`
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 30px;

   .image {
       background-color: ${p => p.theme.colors[p.color]};
       width: fit-content;
       padding: 14px;

       display: flex;
       justify-content: center;
       align-items: center;
       border-radius: 50%;
       margin-bottom: 30px;
   } 

   .title {
       font-weight: bold;
       font-size: 24px;
       margin-bottom: 15px;
       line-height: 37px;
   }

   .text {
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
        color: ${p => p.theme.colors.gray2};
   }
`;
