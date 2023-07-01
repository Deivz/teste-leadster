import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: ${props => props.theme["color-grayish-blue"]};
    margin: 0;
    font-family: ${props => props.theme["font-family"]};
    padding: 0;
  }

  html {
    height: 100%;
    width: 100%;
  }

  body{
    background-color: ${props => props.theme["body-bg-color"]};
    color: var(--texto-padrao);
    font-family: var(--fonte);
    line-height: 19px;
    height: 100%;
  }

  main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
  }
`;