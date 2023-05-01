import { useRef } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import ButtonMedal from "../button/ButtonMedal/ButtonMedal";

import classes from "./AccentInput.module.css";

const AccentInput = (props) => {
	const uploadRef = useRef(null);

	const handleFileUpload = () => {
		uploadRef.current.click();
	};
	const previewFile = (e) => {
		const reader = new FileReader();
		props.fileRef(e.target.files[0]);
		reader.readAsDataURL(e.target.files[0]);
		reader.onloadend = () => {
			props.onUpload(reader.result);
		};
	};

	const a1 = `${classes["anim-1"]} ${props.disabled && classes["border-disable"]}`;
	const a2 = `${classes["anim-2"]} ${props.disabled && classes["border-disable"]}`;
	return props.type !== "file" ? (
		<div className={classes.input + " " + props["bs-class"]}>
			<FloatingLabel className={classes["input-label"]} controlId={"floating" + props.name + props.id} label={props.label}>
				<Form.Control
					className={"fs-4 " + classes["themed-input"]}
					type={props.type}
					name={props.name}
					accept={props.accept}
					required={props.required}
					placeholder={props.placeholder}
					onChange={props.onChange}
					disabled={props.disabled}
					value={props.value}
					ref={props.inpRef}
				/>
			</FloatingLabel>
			<span className={a1}></span>
			<span className={a2}></span>
		</div>
	) : (
		<div className={props["bs-class"]}>
			<input
				className={"d-none"}
				id={props.name}
				ref={uploadRef}
				type={props.type}
				name={props.name}
				accept={props.accept}
				required={props.required}
				placeholder={props.placeholder}
				onChange={previewFile}
			/>
			<ButtonMedal
				disabled={props.disabled}
				type="button"
				id={"btn" + props.name}
				onClick={handleFileUpload}
				bs-class={props["btn-class"] + " fs-3"}
			>
				{props.children}
			</ButtonMedal>
		</div>
	);
};

export default AccentInput;
