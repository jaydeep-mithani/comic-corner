import classes from "./ButtonMedal.module.css";

const AccentButton = (props) => {
	return (
		<>
			<button
				className={classes["themed-button"] + " btn " + props["bs-class"]}
				as="input"
				onClick={props.onClick}
				size={props.size}
				type={props.type}
				disabled={props.disabled}
			>
				{props.children}
			</button>
		</>
	);
};

export default AccentButton;
