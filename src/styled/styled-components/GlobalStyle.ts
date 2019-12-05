// style
import { createGlobalStyle } from "styled-components";
//

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    // This defines what 1rem is
    @media only screen and (max-width: 37.5em) { 
      font-size: 62.5%;
      
    };
    @media only screen and (max-width: 56.25em) { 
      font-size: 56.25%;
      
    };
    @media only screen and (max-width: 75em) { 
      font-size: 50%;
      
    };
    @media only screen and (max-width: 112.5em) { 
      font-size: 75%;
      
    };
  }

  body {
    background: rgb(245,245,245);
    box-sizing: border-box;
    min-height: 100vh;
    height: auto;
    min-width: 100vw;
    width: 100vw;
    outline: none;
  }
`;
