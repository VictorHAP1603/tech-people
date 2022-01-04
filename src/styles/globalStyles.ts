import { createGlobalStyle } from "styled-components";

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
        padding: 0 10px;
        height: 100%;
    }
`;
