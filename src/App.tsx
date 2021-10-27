import React, { useState } from "react";
import { GlobalStyle, defaultTheme, darkTheme } from "./components/utils";
import {
  Navbar,
  PrimaryButton,
  AlertButton,
  Header1,
  Header2,
  Paragraph,
} from "./components/base";
import MarkDownEditor from "./components/MarkDownEditor/MarkDownEditor";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { noteSlice } from "./app/noteSlice";

const PLACEHOLDER_TEXT = "_Spill your toughs by writing in the editor_";

function App(): JSX.Element {
  const [useDarkTheme, setUseDarkTheme] = useState<boolean>(false);
  const [viewEditor, setViewEditor] = useState<boolean>(true);
  const [textContent, setTextContent] = useState<string>(PLACEHOLDER_TEXT);
  const [title, setTitle] = useState<string>(""); // todo move this to the place of the editor

  const dispatch = useAppDispatch();

  const notes = useAppSelector((state) => state.notes);

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

  function Settings(): JSX.Element {
    return <Header1>Settings</Header1>;
  }

  function NoMatch(): JSX.Element {
    return <Header1>404 - No path found</Header1>;
  }

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <GlobalStyle />
      <Router>
        <Navbar changeTheme={changeTheme} />
        <main>
          <Switch>
            <Route path={"/editor"}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <MarkDownEditor
                  viewEditor={viewEditor}
                  textContent={textContent}
                  handleTextContentChange={handleTextContentChange}
                  darkMode={useDarkTheme}
                />
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "8px" }}
                >
                  <AlertButton onClick={handleClearTextContent}>
                    Delete
                  </AlertButton>
                  <PrimaryButton onClick={changeEditorView}>
                    Toggle .md
                  </PrimaryButton>
                </div>
              </div>
            </Route>
            <Route path={"/settings"}>
              <Settings />
            </Route>
            <Route path={"/"} exact>
              <Header1>Home page</Header1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  dispatch(noteSlice.actions.add(title));
                }}
              >
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </form>
              {notes.map((note) => (
                <div key={note.id}>
                  <Header2>{note.title}</Header2>
                  <Paragraph>{note.content}</Paragraph>
                </div>
              ))}
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
