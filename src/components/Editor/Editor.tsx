import React, { useState } from "react";
import MarkDownEditor from "../MarkDownEditor/MarkDownEditor";
import { AlertButton, PrimaryButton } from "../base";

const PLACEHOLDER_TEXT = "_Spill your toughs by writing in the editor_";

export default function Editor(): JSX.Element {
  const [viewEditor, setViewEditor] = useState<boolean>(true);
  const [textContent, setTextContent] = useState<string>(PLACEHOLDER_TEXT);

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <MarkDownEditor
        id={''}
        viewEditor={viewEditor}
        textContent={textContent}
        handleTextContentChange={handleTextContentChange}
      />
      <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
        <AlertButton onClick={handleClearTextContent}>Delete</AlertButton>
        <PrimaryButton onClick={changeEditorView}>Toggle .md</PrimaryButton>
      </div>
    </div>
  );
}
