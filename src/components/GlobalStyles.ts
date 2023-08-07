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
    /* font-family: 'Barlow Condensed', sans-serif;
    font-family: 'Bellefair', serif; */
}


`;

export default GlobalStyles;
