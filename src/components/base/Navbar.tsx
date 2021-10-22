import React from "react";
import styled, {ThemeProps} from "styled-components";
import {Link} from "react-router-dom";
import {ITheme} from "../utils";

const tabs = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "editor",
    path: "/editor",
  },
  {
    name: "settings",
    path: "/settings"
  }
];

const NavbarContainer = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: ${(props: ThemeProps<ITheme>) => props.theme.primaryColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  a {
    text-decoration: none !important;
  }
  
  li, button {
    color: ${(props: ThemeProps<ITheme>) => props.theme.textColorOnPrimary};
    font-family: ${(props: ThemeProps<ITheme>) => props.theme.primaryFont};
    font-size: 16px;
    display: block;
    cursor: pointer;
    height: 100%;
    padding: 8px 16px;
    margin: 0;
    text-decoration: none !important;
    background-color: ${(props: ThemeProps<ITheme>) => props.theme.primaryColor};
    border: none;
    transition: background-color .1s ease-in-out;

    &:hover {
      background-color: ${(props: ThemeProps<ITheme>) => props.theme.textColorOnPrimary};
      color: ${(props: ThemeProps<ITheme>) => props.theme.primaryColor};
    }
    
    &:active {
      background-color: #f2f2f2;
      color: ${(props: ThemeProps<ITheme>) => props.theme.primaryColor};
    }
  }
`;

export function Navbar({changeTheme}: {changeTheme: () => void}): JSX.Element {
  return (
    <NavbarContainer>
      {tabs.map((tab) => (
          <Link key={tab.name} to={tab.path}><li>{tab.name.toLocaleUpperCase()}</li></Link>
      ))}
      <button type={'button'} onClick={changeTheme}>THEME</button>
    </NavbarContainer>
  );
}
