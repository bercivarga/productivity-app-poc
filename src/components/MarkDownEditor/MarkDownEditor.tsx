import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { PrimaryButton } from "../base";
import styled, {ThemeProps} from "styled-components";
import {ThemeI} from "../utils";

const MDEditorWrapper = styled.div`
  background-color: ${(props: ThemeProps<ThemeI>) => props.theme.backgroundColor};
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
`

export default function MarkDownEditor(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [viewEditor, setViewEditor] = useState<boolean>(false);

  function changeTextContent(value: string | undefined): void {
    if (!value) return;
    setValue(value);
  }

  return (
    <>
        <PrimaryButton onClick={() => setViewEditor(!viewEditor)}>
          Toggle MarkDown
        </PrimaryButton>
      <MDEditorWrapper>

        {viewEditor ? (
          <MDEditor.Markdown source={value} />
        ) : (
          <MDEditor value={value} preview={"edit"} onChange={changeTextContent} />
        )}
      </MDEditorWrapper>
    </>
  );
}
