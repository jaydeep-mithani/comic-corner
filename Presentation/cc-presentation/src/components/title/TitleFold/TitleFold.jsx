import { Link } from "react-router-dom";
import classes from "./TitleFold.module.css";

const TitleFold = (props) => {
	return (
		<div className={"row " + props["bs-class"]}>
			<div className="bg-dark col-auto mx-auto p-sm-3 py-3 rounded-3 shadow">
				<Link to={props.href} className={"text-decoration-none"}>
					<span className={classes.filler}>{props.children}</span>
				</Link>
			</div>
		</div>
	);
};

export default TitleFold;
