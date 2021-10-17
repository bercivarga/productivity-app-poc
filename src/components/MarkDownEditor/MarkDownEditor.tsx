import React  from "react";
import MDEditor from "@uiw/react-md-editor";
import styled, { ThemeProps } from "styled-components";
import { ITheme } from "../utils";

export interface IMarkDownEditor {
  viewEditor: boolean;
  textContent: string;
  handleTextContentChange: (text: string) => void;
}

const MDEditorWrapper = styled.div`
  background-color: ${(props: ThemeProps<ITheme>) => props.theme.editorColor};
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
`;

export default function MarkDownEditor(props: IMarkDownEditor): JSX.Element {
  const { viewEditor, textContent, handleTextContentChange } = props;

  function changeTextContent(value: string | undefined): void {
    if (!value) return;
    handleTextContentChange(value);
  }

  return (
    <MDEditorWrapper>
      {viewEditor ? (
        <MDEditor value={textContent} preview={"edit"} onChange={changeTextContent} />
      ) : (
        <MDEditor.Markdown style={{ padding: "24px" }} source={textContent} />
      )}
    </MDEditorWrapper>
  );
}
