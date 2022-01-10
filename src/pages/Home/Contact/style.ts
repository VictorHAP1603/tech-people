import styled from "styled-components";

export const Container = styled.section`
  padding: 80px 0px 100px 0px !important;
  background-color: ${p => p.theme.colors.background};

    .header {
        margin-bottom: 35px;

        h2 {
            font-size: 37px;
            font-weight: 700;
            color: ${p => p.theme.colors.black};
        }

        p {
            font-weight: 400;
            font-size: 18px;
            color: ${p => p.theme.colors.gray2};
            opacity: 0.73s;
            margin-top: 15px;
        }
    }

    form {
        display: flex;

        input, button {
            display: block;
            flex: 1;
            border-radius: 8px;
            transition: all .4s;
        }

        input {
            border: 1px solid #dedede;
            outline: none;
            padding: 20px;

            &:focus {
                border-color: ${p => p.theme.colors.primary};
            }

            &::placeholder {
                color: ${p => p.theme.colors.gray2};
                opacity: 0.5;
                font-size: 18px;
            }

            & + input {
                margin-left: 30px;
            }
        }

        button {    
            margin-left: 30px;
            background-color: ${p => p.theme.colors.primary};
            color: ${p => p.theme.colors.white};
            
            display: flex;  
            align-items: center;
            justify-content: space-between;

            padding: 0px 20px;
            transition: all .4s;

            p {
                font-size: 22px;
            }

            svg {   
                fill: ${p => p.theme.colors.gray2};
            }

            &:hover {
                filter: brightness(.8);
            }
        }   

    }
`;
