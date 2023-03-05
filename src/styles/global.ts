import { createGlobalStyle } from "styled-components";
import "./font.css";

const GlobalStyle = createGlobalStyle`
html,
body {
  font-family: "Pretendard-Web", serif;
  font-size: 62.5%;
  padding: 0;
  margin: 0;
  background-color: #f5f5f9;
}
a {
  color: inherit;
  text-decoration: none;
}
* {
font-family: "Pretendard-Web", serif;
  font-weight: 500;
  box-sizing: border-box;
}
body,
button,
dd,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
input,
legend,
li,
ol,
p,
select,
table,
td,
textarea,
th,
ul {
  margin: 0;
  padding: 0;
}
body,
button,
input,
select,
table,
textarea {
}
h1,
h2,
h3,
h4,
h5,
h6 {
}

`;

export default GlobalStyle;
