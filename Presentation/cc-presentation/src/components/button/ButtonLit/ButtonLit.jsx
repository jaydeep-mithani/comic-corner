import Button from "react-bootstrap/esm/Button";
import classes from "./ButtonLit.module.css";

const ButtonLit = (props) => {
	return (
		<>
			<Button type={props.type} form={props.form} className={classes.btn + " " + props["bs-class"]} onClick={props.onClick}>
				{props.children}
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</Button>
		</>
	);
};

export default ButtonLit;
