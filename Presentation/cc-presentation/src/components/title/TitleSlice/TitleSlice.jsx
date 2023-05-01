import classes from "./TitleSlice.module.css";

const TitleSlice = (props) => {
	return (
		<div className="row">
			<section
				className={classes.wrapper + " bg-dark col-auto mx-auto rounded-5 shadow p-3 " + props["bs-class"] + " " + classes[props.fs]}
			>
				<div className={classes.top}>{props.children}</div>
				<div className={classes.bottom} aria-hidden="true">
					{props.children}
				</div>
			</section>
		</div>
	);
};

export default TitleSlice;
