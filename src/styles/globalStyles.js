import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary:#27AE60;
        --color-primary-50:#93D7AF;
        --color-secondary:#EB5757;

        --grey-100:#333333;
        --grey-50:#828282;
        --grey-20:#E0E0E0;
        --grey-0:#F5F5F5;

        --negative:#E60000;
        --warning:#FFCD07;
        --sucess:#168821;
        --information:#155BCB;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: 0;
    }

    img {
        display: flex;
        width: 100%;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`;
