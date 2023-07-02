import { createGlobalStyle } from "styled-components";

export const breakPoint = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '81.25rem',
  desktop: '90rem'
}

export const device = {
  mobileS: `(min-width: ${breakPoint.mobileS})`,
  mobileM: `(min-width: ${breakPoint.mobileM})`,
  mobileL: `(min-width: ${breakPoint.mobileL})`,
  tablet: `(min-width: ${breakPoint.tablet})`,
  laptop: `(min-width: ${breakPoint.laptop})`,
  desktop: `(min-width: ${breakPoint.desktop})`
};

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
    flex-grow: 1;
  }
`;