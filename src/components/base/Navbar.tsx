import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {SecondaryButton} from "./Buttons";

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
  width: 100vw;
  padding: 0;
  margin: 0;
  background-color: blue;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  li {
    color: white;
    display: block;
    cursor: pointer;
    height: 100%;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .1s ease-in-out;

    &:hover {
      background-color: darkblue;
      text-decoration: none;
    }
    
    &:active {
      background-color: darkslateblue;
      text-decoration: none;
    }
  }
`;

export function Navbar({changeTheme}: {changeTheme: () => void}): JSX.Element {
  return (
    <NavbarContainer>
      {tabs.map((tab) => (
          <Link key={tab.name} to={tab.path}><li>{tab.name.toLocaleUpperCase()}</li></Link>
      ))}
      <SecondaryButton type={'button'} onClick={changeTheme}>THEME</SecondaryButton>
    </NavbarContainer>
  );
}
