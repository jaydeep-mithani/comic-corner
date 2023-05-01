import classes from "./TitleAfterImage.module.css";

const TitleAfterImage = (props) => {
	return (
		<div className={classes.wrapper + " " + props["bs-class"]}>
			<p className={classes.label + " pe-1 pe-lg-3"}>{props.label}</p>
			<p className={classes.content}>{props.children}</p>
		</div>
	);
};

export default TitleAfterImage;
