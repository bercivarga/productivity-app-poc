import React from "react";
import MDEditor from "@uiw/react-md-editor";
import styled, { ThemeProps } from "styled-components";
import { ITheme } from "../utils";
import { useAppSelector } from "../../app/hooks";

export interface IMarkDownEditor {
  viewEditor: boolean;
  textContent: string;
  handleTextContentChange: (text: string) => void;
}

const MDEditorWrapper = styled.div`
  background-color: ${(props: ThemeProps<ITheme>) => props.theme.editorColor};
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  caret-color: ${(props: ThemeProps<ITheme>) => props.theme.textColor};
  caret-shape: bar;
`;

export default function MarkDownEditor(props: IMarkDownEditor): JSX.Element {
  const { viewEditor, textContent, handleTextContentChange } = props;

  const darkMode = useAppSelector(state => state.darkTheme)

  function changeTextContent(value: string | undefined): void {
    if (!value) return;
    handleTextContentChange(value);
  }

  return (
    <MDEditorWrapper>
      {viewEditor ? (
        <MDEditor
          value={textContent}
          style={{
            borderRadius: 0,
            backgroundColor: `${darkMode ? "#444444" : "#ffffff"}`,
          }}
          preview={"edit"}
          hideToolbar
          onChange={changeTextContent}
        />
      ) : (
        <MDEditor.Markdown style={{ padding: "24px" }} source={textContent} />
      )}
    </MDEditorWrapper>
  );
}
