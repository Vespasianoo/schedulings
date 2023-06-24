import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    color: #ffffff;
    text-decoration: none;
    list-style: none;
    border: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #root {
    max-width: 100vw;
    max-height: 100vh;

    width: 100%;
    height: 100%;
  }
  :root {

    font-size: 62.5%;
    --bg-color: #1E1E1E; 
    --bg-input: #18181b;
    --color-1: #D91A1A;
    --color-2: #272727;
    --color-3: #a1a1aa;
    --color-1-hover: #ab1717;
    --text-color-1: #c4c4c6;
    --text-color-2: #bebebf;
    --button-close: #71717a;

    // default
    --white: #ffffff;
    --black: #000000;
  }
/* 
  @media (min-width: 900px) and (max-width: 1080px) {
    :root {
      font-size: 50%;
    }
  } */
  
  body {
    font-size: 1.6rem;
    background: var(--bg-color);
    overflow-x: hidden;
  }

  body * {
   font-family: "Inter", sans-serif;
  }

`
