import React, { useState } from "react";
import { GlobalStyle, defaultTheme, darkTheme } from "./components/utils";
import { PrimaryButton, SecondaryButton, AlertButton } from "./components/base";
import MarkDownEditor from "./components/MarkDownEditor/MarkDownEditor";
import { ThemeProvider } from "styled-components";

const PLACEHOLDER_TEXT = "_Spill your toughs by writing in the editor_"

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
    <>
      <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <GlobalStyle />
        <MarkDownEditor
          viewEditor={viewEditor}
          textContent={textContent}
          handleTextContentChange={handleTextContentChange}
        />
        <SecondaryButton onClick={changeTheme}>Change theme</SecondaryButton>
        <AlertButton onClick={handleClearTextContent}>Delete</AlertButton>
        <PrimaryButton onClick={changeEditorView}>Toggle .md</PrimaryButton>
      </ThemeProvider>
    </>
  );
}

export default App;
