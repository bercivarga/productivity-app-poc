import {createGlobalStyle, ThemeProps} from "styled-components";
import {primaryFont} from "./typography";
import {normalize} from "polished";
import {ThemeI} from "./themes";

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
    background-color: ${(props: ThemeProps<ThemeI>) => props.theme.backgroundColor};
    transition: background-color .5s ease-in-out;
  }
  
  p, span, h1, h2, h3, h4, h5 {
    color: ${(props: ThemeProps<ThemeI>) => props.theme.textColor};
  }
`