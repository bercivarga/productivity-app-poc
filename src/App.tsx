import React from "react";
import { GlobalStyle, defaultTheme, darkTheme } from "./components/utils";
import { Navbar, Header1 } from "./components/base";
import { ThemeProvider } from "styled-components";
import { themeSlice } from "./app/themeSlice";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import Editor from "./components/Editor/Editor";

function App(): JSX.Element {
  const isDarkTheme = useAppSelector((state) => state.darkTheme);
  const dispatch = useAppDispatch();

  function Settings(): JSX.Element {
    return <Header1>Settings</Header1>;
  }

  function NoMatch(): JSX.Element {
    return <Header1>404 - No path found</Header1>;
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
      <GlobalStyle />
      <Router>
        <Navbar
          changeTheme={() => dispatch(themeSlice.actions.switchTheme())}
        />
        <main>
          <Switch>
            <Route path={"/editor"}>
              <Editor />
            </Route>
            <Route path={"/settings"}>
              <Settings />
            </Route>
            <Route path={"/"} exact>
              <HomePage />
            </Route>
            <Route path={"*"}>
              <NoMatch />
            </Route>
          </Switch>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
