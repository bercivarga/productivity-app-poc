import React, { useState } from "react";
import styled from "styled-components";
import { SecondaryButton, CloseButton } from "../base";
import MarkDownEditor from "../MarkDownEditor/MarkDownEditor";
import { ThemeProps } from "styled-components";
import { ITheme } from "../utils";
import { INote } from "../../app/noteSlice";

export interface IMarkDownModal {
	note: INote | undefined;
	handleModal: (show: boolean, note: INote | undefined) => void;
}

const ModalContainer = styled.a`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 48px;
	background: rgba(0, 0, 0, 0.5);
`;

const EditorWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	background-color: ${(props: ThemeProps<ITheme>) => props.theme.backgroundColor};
	border-radius: 8px;
	padding: 48px;

	@media (min-width: 769px) {
		width: 800px;
	}
`;

const ButtonsWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16px;
`;

export default function MarkDownModal(props: IMarkDownModal): JSX.Element {
	const [showEditor, setShowEditor] = useState<boolean>(false);
	const { note, handleModal } = props;

	return (
		<ModalContainer onClick={() => handleModal(false, undefined)}>
			<EditorWrapper onClick={(e) => e.stopPropagation()}>
				<ButtonsWrapper>
					<SecondaryButton
						type="button"
						onClick={() => setShowEditor(!showEditor)}
					>
						Toggle Markdown
					</SecondaryButton>
					<CloseButton type="button" onClick={() => handleModal(false, undefined)}>
						<svg viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
							/>
						</svg>
					</CloseButton>
				</ButtonsWrapper>
				<MarkDownEditor note={note} viewEditor={showEditor} />
			</EditorWrapper>
		</ModalContainer>
	);
}
