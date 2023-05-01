import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import classes from "./TitleGlow.module.css";

const TitleGLow = (props) => {
	return (
		<Link to={props.href} className="text-decoration-none">
			<motion.div
				initial={{ rotate: -10 }}
				whileHover={{ rotate: -3 }}
				transition={{ type: "spring", stiffness: 750, damping: 6, duration: 0.3 }}
				className={classes.glow}
			>
				<p to={props.href} className={classes.text}>
					{props.children}
				</p>
			</motion.div>
		</Link>
	);
};

export default TitleGLow;
