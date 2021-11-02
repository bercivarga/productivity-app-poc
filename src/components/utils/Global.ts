import {createGlobalStyle, ThemeProps} from "styled-components";
import {primaryFont} from "./typography";
import {normalize} from "polished";
import {ITheme} from "./themes";

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  
  html {
    font-size: 16px;
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    font-family: ${primaryFont};
    background-color: ${(props: ThemeProps<ITheme>) => props.theme.backgroundColor};
    transition: background-color .5s ease-in-out;
  }
  
  main {
    padding: 24px 48px;
  }
  
  p, span, h1, h2, h3, h4, h5 {
    color: ${(props: ThemeProps<ITheme>) => props.theme.textColor};
  }

  textarea {
    -webkit-text-fill-color: ${(props: ThemeProps<ITheme>) => props.theme.textColor} !important;
  }
`