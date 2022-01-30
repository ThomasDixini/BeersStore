import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`


:root {

    
    --background:#434A53;

    
    --shape: #ffffff;
    --verdeAgua: #01A5B1;
    --darkBlue: #131F2F;
    --grayBackground: #AABCD0;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }
    @media (max-width: 720px) {
        font-size: 87.5%;
    }
}

body {
    background-color: var(--background)
}

body, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
}
h1,h2,h3,h4,h5,h6, strong {
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
}

`







