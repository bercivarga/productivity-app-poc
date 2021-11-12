import React from "react";
import MDEditor from "@uiw/react-md-editor";
import styled, { ThemeProps } from "styled-components";
import { ITheme } from "../utils";
import { useAppSelector } from "../../app/hooks";
import { INote } from "../../app/noteSlice";
import { Header1 } from "../base";

export interface IMarkDownEditor {
  note: INote;
  viewEditor: boolean;
  handleNoteContentChange: (note: INote, content: string) => void;
}

const MDEditorWrapper = styled.div`
  background-color: ${(props: ThemeProps<ITheme>) => props.theme.editorColor};
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  caret-color: ${(props: ThemeProps<ITheme>) => props.theme.textColor};
  caret-shape: bar;
  padding: 24px;
  width: 100%;
  border-radius: 4px;
`;

export default function MarkDownEditor(props: IMarkDownEditor): JSX.Element {
  const { note, viewEditor, handleNoteContentChange } = props;

  const darkMode = useAppSelector(state => state.darkTheme)

  return (
    <MDEditorWrapper>
      <Header1>{note?.title}</Header1>
      {viewEditor ? (
        <MDEditor
          value={note?.content}
          style={{
            borderRadius: 0,
            backgroundColor: `${darkMode ? "#444444" : "#ffffff"}`,
          }}
          preview={"edit"}
          hideToolbar
          onChange={(content) => handleNoteContentChange(note, (content ?? ''))}
        />
      ) : (
        <MDEditor.Markdown source={note?.content} />
      )}
    </MDEditorWrapper>
  );
}
