import React, { useState } from "react";
import {
  AlertButton,
  Header1,
  Header2,
  HelperText,
  Paragraph,
  PrimaryButton,
  Input,
} from "../base";
import { noteSlice, getTimeObject, INote } from "../../app/noteSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styled, { ThemeProps } from "styled-components";
import { ITheme } from "../utils";
import MarkDownModal from "../MarkdownModal/MarkdownModal";

export const HomePageForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
`;

export const NotesThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const NotesThumbnailRightContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const NoteThumbnail = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 8px 16px;
  background-color: ${(props: ThemeProps<ITheme>) => props.theme.editorColor};
  border: none;
  border-radius: 8px;
  box-shadow: ${(props: ThemeProps<ITheme>) => props.theme.shadowColor} 0 4px
    12px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: ${(props: ThemeProps<ITheme>) => props.theme.shadowColorOnHover}
      0 4px 12px;
  }
`;

export default function HomePage(): JSX.Element {
  const [title, setTitle] = useState<string>(""); // todo move this to the place of the editor
  const [content, setContent] = useState<string>(""); // todo move this to the place of the editor
  const [formError, setFormError] = useState<boolean>(false); // todo move this to the place of the editor
  const [showNoteModal, setShowNoteModal] = useState<boolean>(false);
  const [currentNote, setCurrentNote] = useState<string>("0");

  const dispatch = useAppDispatch();

  const notes = useAppSelector((state) => state.notes);

  function sortNotesByCreationTime(notes: INote[]): INote[] {
    const notesCopy = Array.from(notes);
    const sortedNotes = notesCopy.sort((note1, note2) => {
      if (!note1?.time || !note2?.time) return 1;
      return note2?.time.creationTime - note1?.time.creationTime;
    });
    return sortedNotes;
  }

  function handleModal(show: boolean, id: string) {
    setCurrentNote(id);
    setShowNoteModal(show);
  }

  return (
    <>
      <Header1>Home page</Header1>
      <HomePageForm
        onSubmit={(e) => {
          e.preventDefault();
          if (!title || !content) {
            setFormError(true);
            return;
          }
          dispatch(
            noteSlice.actions.add({ title, content, time: getTimeObject() })
          );
          setTitle("");
          setContent("");
        }}
      >
        <Input
          value={title}
          placeholder={"Title"}
          onChange={(e) => {
            if (formError) setFormError(false);
            setTitle(e.target.value);
          }}
        />
        <Input
          value={content}
          placeholder={"Content"}
          onChange={(e) => {
            if (formError) setFormError(false);
            setContent(e.target.value);
          }}
        />
        {formError && <HelperText>Please fill in all the fields.</HelperText>}
        <PrimaryButton>Submit</PrimaryButton>
      </HomePageForm>
      {showNoteModal && (
        <MarkDownModal id={currentNote} handleModal={handleModal} />
      )}
      <NotesThumbnailContainer>
        {sortNotesByCreationTime(notes).map((note) => (
          <NoteThumbnail
            key={note.id}
            onClick={() => handleModal(true, note.id)}
          >
            <Header2
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {note.title}
            </Header2>
            <NotesThumbnailRightContent>
              <TimeContainer>
                <Paragraph>
                  {note?.time?.hour}:
                  {(note?.time?.minute ?? 0) < 10
                    ? `0${(note?.time?.minute ?? 0)}`
                    : note?.time?.minute}{" "}
                </Paragraph>
                <Paragraph>
                  {note?.time?.day}/{(note?.time?.month ?? 0) + 1}/
                  {note?.time?.year}
                </Paragraph>
              </TimeContainer>
              <AlertButton
                onClick={() => dispatch(noteSlice.actions.remove(note.id))}
              >
                Remove
              </AlertButton>
            </NotesThumbnailRightContent>
          </NoteThumbnail>
        ))}
      </NotesThumbnailContainer>
    </>
  );
}
