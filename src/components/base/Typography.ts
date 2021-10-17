import styled, {ThemeProps} from "styled-components";
import {typeScale, ITheme} from "../utils";

export const Paragraph = styled.p`
  font-size: ${typeScale.paragraph};
  font-family: ${(props: ThemeProps<ITheme>) => props.theme.primaryFont};
  color: ${(props: ThemeProps<ITheme>) => props.theme.textColor}
`

export const Header1 = styled.h1`
  font-size: ${typeScale.header1};
  font-family: ${(props: ThemeProps<ITheme>) => props.theme.primaryFont};
  color: ${(props: ThemeProps<ITheme>) => props.theme.textColor}
`

export const Header2 = styled.h2`
  font-size: ${typeScale.header2};
  font-family: ${(props: ThemeProps<ITheme>) => props.theme.primaryFont};
  color: ${(props: ThemeProps<ITheme>) => props.theme.textColor}
`

export const Header3 = styled.h3`
  font-size: ${typeScale.header3};
  font-family: ${(props: ThemeProps<ITheme>) => props.theme.primaryFont};
  color: ${(props: ThemeProps<ITheme>) => props.theme.textColor}
`

export const Header4 = styled.h4`
  font-size: ${typeScale.header4};
  font-family: ${(props: ThemeProps<ITheme>) => props.theme.primaryFont};
  color: ${(props: ThemeProps<ITheme>) => props.theme.textColor}
`

export const Header5 = styled.h5`
  font-size: ${typeScale.header5};
  font-family: ${(props: ThemeProps<ITheme>) => props.theme.primaryFont};
  color: ${(props: ThemeProps<ITheme>) => props.theme.textColor}
`

export const Span = styled.span`
  font-size: ${typeScale.paragraph};
  font-family: ${(props: ThemeProps<ITheme>) => props.theme.primaryFont};
  color: ${(props: ThemeProps<ITheme>) => props.theme.textColor};
`

export const HelperText = styled.span`
  font-size: ${typeScale.helperText};
  font-family: ${(props: ThemeProps<ITheme>) => props.theme.primaryFont};
  color: ${(props: ThemeProps<ITheme>) => props.theme.textColor};
`