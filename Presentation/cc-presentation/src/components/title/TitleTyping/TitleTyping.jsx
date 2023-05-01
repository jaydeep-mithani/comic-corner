import { Link } from "react-router-dom";
import classes from "./TitleTyping.module.css";

const TitleTyping = (props) => {
	return (
		<Link to={"/" + props.href} className={props["bs-class"] + " " + classes.type} style={{ "--length": props.width }}>
			{props.children}
		</Link>
	);
};

export default TitleTyping;
