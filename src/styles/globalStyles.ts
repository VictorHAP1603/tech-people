import { createGlobalStyle, keyframes } from "styled-components";

export const fadeRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(-30px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
`

export const fadeLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(30px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
`

export const fadeBottom = keyframes`
    from {
        opacity: 0;
        transform: translateY(-30px);
    }

    to {
        opacity: 1;
        transform: translateY(0px);
    }
`

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, button, textarea, select {
        font-family: 'Roboto', sans-serif;
        border: 0;
    }

    html, body, #root {
        height: 100%;
    }

    button {
        cursor: pointer;
        background: none;
    }
    
    a {
        text-decoration: none;
    }   

    img {
        max-width: 100%;
        object-fit: cover;
    }

    .container {
        margin: 0 auto;
        max-width: 1180px;
        padding: 0 15px;
        height: 100%;

    }
`;
