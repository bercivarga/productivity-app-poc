import React from "react";
import MDEditor from "@uiw/react-md-editor";
import styled, { ThemeProps } from "styled-components";
import { ITheme } from "../utils";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { noteSlice } from "../../app/noteSlice";
import { Header1 } from "../base";

export interface IMarkDownEditor {
  id: string;
  viewEditor: boolean;
}

const MDEditorWrapper = styled.div`
  background-color: ${(props: ThemeProps<ITheme>) => props.theme.editorColor};
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  caret-color: ${(props: ThemeProps<ITheme>) => props.theme.textColor};
  caret-shape: bar;
  padding: 24px;
  width: 100%;
`;

export default function MarkDownEditor(props: IMarkDownEditor): JSX.Element {
  const { id, viewEditor } = props;

  const dispatch = useAppDispatch();

  const darkMode = useAppSelector(state => state.darkTheme)
  const selectedNote = useAppSelector(state => state.notes.find(note => note.id === id))

  return (
    <MDEditorWrapper>
      <Header1>{selectedNote?.title}</Header1>
      {viewEditor ? (
        <MDEditor
          value={selectedNote?.content}
          style={{
            borderRadius: 0,
            backgroundColor: `${darkMode ? "#444444" : "#ffffff"}`,
          }}
          preview={"edit"}
          hideToolbar
          onChange={(content) => {console.log(content);dispatch(noteSlice.actions.changeContent({id, newContent: (content ?? '')}))}}
        />
      ) : (
        <MDEditor.Markdown source={selectedNote?.content} />
      )}
    </MDEditorWrapper>
  );
}
