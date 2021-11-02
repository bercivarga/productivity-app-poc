import React, { useState } from "react";
import styled from "styled-components";
import { Header1 } from "../base";
import MarkDownEditor from "../MarkDownEditor/MarkDownEditor";

export interface IMarkDownModal {
	id: string;
	title: string;
	content: string;
	handleModal: (
		show: boolean,
		content: { id: string; title: string; content: string }
	) => void;
}

const ModalContainer = styled.div`
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
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	background: white;
	border-radius: 8px;
	padding: 48px;
`;

export default function MarkDownModal(props: IMarkDownModal): JSX.Element {
	const [showEditor, setShowEditor] = useState<boolean>(false);
	const { id, title, handleModal } = props;

	return (
		<ModalContainer>
			<EditorWrapper>
				<button
					type="button"
					onClick={() => handleModal(false, { id: "", title: "", content: "" })}
				>
					Close
				</button>
				<button type="button" onClick={() => setShowEditor(!showEditor)}>
					Switch view
				</button>
				<Header1>{title}</Header1>
				<MarkDownEditor
					id={id}
					viewEditor={showEditor}
				/>
			</EditorWrapper>
		</ModalContainer>
	);
}
