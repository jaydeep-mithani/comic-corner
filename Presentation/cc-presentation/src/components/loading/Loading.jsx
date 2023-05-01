import classes from "./Loading.module.css";

const Loading = () => {
	const loaders = [
		<div className={classes["dots-bars-1"] + " " + classes.filter}></div>,
		<div className={classes["dots-bars-2"] + " " + classes.filter}></div>,
		<div className={classes["dots-bars-3"] + " " + classes.filter}></div>,
		<div className={classes["dots-bars-4"] + " " + classes.filter}></div>,
		<div className={classes["dots-bars-5"] + " " + classes.filter}></div>,
		<div className={classes["dots-bars-6"] + " " + classes.filter}></div>,
		<div className={classes["dots-bars-7"] + " " + classes.filter}></div>,
		<div className={classes["dots-bars-8"] + " " + classes.filter}></div>,
		<div className={classes["dots-bars-9"] + " " + classes.filter}></div>,
		<div className={classes["dots-bars-10"] + " " + classes.filter}></div>,
	];
	const loader = Math.floor(Math.random() * 10);
	return <div className={"row justify-content-center my-3 " + classes.bg}>{loaders[loader]}</div>;
};

export default Loading;
