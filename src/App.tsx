import React, { useState } from "react";
import { GlobalStyle, defaultTheme, darkTheme } from "./components/utils";
import { PrimaryButton, SecondaryButton, AlertButton, Header1, Paragraph } from "./components/base";
import MarkDownEditor from "./components/MarkDownEditor/MarkDownEditor";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const PLACEHOLDER_TEXT = "_Spill your toughs by writing in the editor_";

function App(): JSX.Element {
  const [useDarkTheme, setUseDarkTheme] = useState<boolean>(false);
  const [viewEditor, setViewEditor] = useState<boolean>(true);
  const [textContent, setTextContent] = useState<string>(PLACEHOLDER_TEXT);

  function changeTheme(): void {
    setUseDarkTheme(!useDarkTheme);
  }

  function changeEditorView(): void {
    setViewEditor(!viewEditor);
  }

  function handleTextContentChange(text: string): void {
    setTextContent(text);
  }

  function handleClearTextContent(): void {
    setTextContent("");
  }

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path={"/editor"}>
            <Link to={"/"}><SecondaryButton>HOME</SecondaryButton></Link>
            <MarkDownEditor
              viewEditor={viewEditor}
              textContent={textContent}
              handleTextContentChange={handleTextContentChange}
            />
            <AlertButton onClick={handleClearTextContent}>Delete</AlertButton>
            <PrimaryButton onClick={changeEditorView}>Toggle .md</PrimaryButton>
          </Route>
          <Route path={"/"} exact>
            <Header1>Home page</Header1>
            <Link to={"/editor"}><Paragraph>To the editor.</Paragraph></Link>
            <SecondaryButton onClick={changeTheme}>Change theme</SecondaryButton>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
