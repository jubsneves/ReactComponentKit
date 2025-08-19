import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*, html, body {
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

`;

export default Global;
