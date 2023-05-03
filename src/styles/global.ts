import { createGlobalStyle } from "styled-components";
import "./font.css";

const GlobalStyle = createGlobalStyle`
html,
body {
  font-family: "Pretendard-Web", serif;
  font-size: 62.5%;
  padding: 0;
  margin: 0;
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
/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  html {
    font-size: 9px;
  }
}
/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/
@media (min-width: 768px) and (max-width: 1024px) {
  html {
    font-size: 8px;
  }
}
/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/
@media (min-width: 1025px) and (max-width: 1919px) {
  html {
    font-size: 10px;
  }
}
@media (min-width: 1920px) and (max-width: 2559px) {
  html {
    font-size: 10.5px;
  }
}
@media (min-width: 2560px) {
  html {
    font-size: 11px;
  }
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
