import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
        font-family: "Open Sans",Arial,serif;;
        line-height: 1.6rem;
    }

    body{
        margin: 0;
        padding: 0;
        background-size: cover;
        background-repeat: no-repeat;
        overflow-x: hidden;
    }
`;
