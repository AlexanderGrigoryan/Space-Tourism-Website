import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100vw;
    min-height: 100vh;
    font-family: 'Barlow', sans-serif;
}


`;

export default GlobalStyles;
