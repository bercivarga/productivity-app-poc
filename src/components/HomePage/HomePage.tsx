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
import { noteSlice, getTimeObject } from "../../app/noteSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styled from "styled-components";

export const HomePageForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export default function HomePage(): JSX.Element {
  const [title, setTitle] = useState<string>(""); // todo move this to the place of the editor
  const [content, setContent] = useState<string>(""); // todo move this to the place of the editor
  const [formError, setFormError] = useState<boolean>(false); // todo move this to the place of the editor

  const dispatch = useAppDispatch();

  const notes = useAppSelector((state) => state.notes);

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
          dispatch(noteSlice.actions.add({ title, content, time: getTimeObject() }));
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
      {notes.map((note) => (
        <div key={note.id}>
          <Header2>{note.title}</Header2>
          <Paragraph>{note.time.hour}:{note.time.minute < 10 ? `0${note.time.minute}` : note.time.minute} | {note.time.day}/{note.time.month + 1}/{note.time.year}</Paragraph>
          <Paragraph>{note.time.creationTime}</Paragraph>
          <AlertButton
            onClick={() => dispatch(noteSlice.actions.remove(note.id))}
          >
            Remove
          </AlertButton>
        </div>
      ))}
    </>
  );
}
