import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, *::after, *::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Bodoni Moda', serif;
        font-family: 'Kantumruy Pro', sans-serif;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

    a, button {        
        font-family: 'Bodoni Moda', serif;
    }
`;
