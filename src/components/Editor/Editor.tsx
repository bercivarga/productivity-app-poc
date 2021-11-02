import React, { useState } from "react";
import MarkDownEditor from "../MarkDownEditor/MarkDownEditor";
import { PrimaryButton } from "../base";

export default function Editor(): JSX.Element {
  const [viewEditor, setViewEditor] = useState<boolean>(true);

  function changeEditorView(): void {
    setViewEditor(!viewEditor);
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
      />
      <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
        <PrimaryButton onClick={changeEditorView}>Toggle .md</PrimaryButton>
      </div>
    </div>
  );
}
