import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap");

* {
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
}

body,
html,
#root {
  height: 100%;
}

body {
  font: 400 14px Roboto, sans-serif;
  background: #f0f0f5;
  -webkit-font-smoothing: antialiased;
}

input,
button,
textarea {
  font-family: "Roboto", Arial, Helvetica, sans-serif;
}

button {
  cursor: pointer;
}

`;
export default globalStyle;
