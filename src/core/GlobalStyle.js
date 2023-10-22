import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *, ::before, ::after {
    box-sizing: inherit;
  }
  
body {
  font-family: 'Lato', sans-serif;
  font-family: 'Oswald', sans-serif;
  font-family: 'Poppins', sans-serif;
  margin: 0;
};
`;
