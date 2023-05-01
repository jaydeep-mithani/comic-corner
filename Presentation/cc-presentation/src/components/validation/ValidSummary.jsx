import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCheckCircle } from "@fortawesome/fontawesome-free-solid";

import classes from "./ValidSummary.module.css";

const ValidSummary = (props) => {
	const indicator = props.isValid ? classes.valid : classes.invalid;
	const icon = props.isValid ? faCheckCircle : faSpinner;
	const progress = props.isValid ? classes.done : classes.pending;

	return (
		<div className={classes.default + " col-12 text-start text-muted fs-4 p-2 ps-4 " + indicator}>
			<FontAwesomeIcon icon={icon} className={progress} /> {props.children}
		</div>
	);
};

export default ValidSummary;
