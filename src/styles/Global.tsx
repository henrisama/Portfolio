import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: Roboto;
  }

  html, body{
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
  }

  html, body, #root{
    height: 100%;
  }
`;
