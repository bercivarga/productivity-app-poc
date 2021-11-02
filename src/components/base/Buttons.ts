import styled, { ThemeProps } from "styled-components";
import { typeScale, ITheme } from "../utils";

export const Button = styled.button`
  border: 1px solid black;
  background-color: transparent;
  font-size: ${typeScale.paragraph};
  color: black;
  border-radius: 4px;
  cursor: pointer;
  padding: 8px 16px;
  transition: all 0.1s linear;

  &:disabled {
    border-color: ${(props: ThemeProps<ITheme>) => props.theme.disabled};
    background-color: white;
    color: ${(props: ThemeProps<ITheme>) => props.theme.disabled};
    cursor: not-allowed;
  }
`;

export const PrimaryButton = styled(Button)`
  border-color: ${(props: ThemeProps<ITheme>) => props.theme.primaryColor};
  color: ${(props: ThemeProps<ITheme>) => props.theme.primaryColor};

  &:hover {
    color: ${(props: ThemeProps<ITheme>) => props.theme.textColorInverted};
    background-color: ${(props: ThemeProps<ITheme>) =>
      props.theme.primaryColor};
  }
`;

export const SecondaryButton = styled(Button)`
  border-color: transparent;
  color: ${(props: ThemeProps<ITheme>) => props.theme.primaryColor};
  background-color: transparent;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${(props: ThemeProps<ITheme>) =>
      props.theme.primaryColorHover};
  }

  &:disabled {
    border-color: transparent;
    text-decoration: none;
  }
`;

export const AlertButton = styled(Button)`
  color: white;
  background-color: ${(props: ThemeProps<ITheme>) =>
    props.theme.status.warning.color};
  border-color: ${(props: ThemeProps<ITheme>) =>
    props.theme.status.warning.color};

  &:hover {
    background-color: ${(props: ThemeProps<ITheme>) =>
      props.theme.status.warning.onHover};
  }

  &:active {
    background-color: ${(props: ThemeProps<ITheme>) =>
      props.theme.status.warning.onActive};
  }
`;

export const CloseButton = styled(AlertButton)`
  background-color: ${(props: ThemeProps<ITheme>) =>
    props.theme.status.warning.color};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  padding: 4px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
