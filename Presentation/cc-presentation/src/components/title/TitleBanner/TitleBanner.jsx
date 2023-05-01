import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import classes from "./TitleBanner.module.css";

const TitleBanner = (props) => {
	const letters = props.children.split("");
	return (
		<Link to={props.href} className="text-decoration-none">
			<div className={classes.head + " row g-0 " + props["bs-class"]}>
				<motion.ul
					animate={{ skewY: -10 }}
					whileHover={{ skewY: 0 }}
					className={classes.banner + " col-auto mx-auto fs-3 px-md-5 py-md-3 shadow rounded bg-dark"}
				>
					{letters.map((letter, index) => (
						<li key={index} className={`${letter === " " && "px-2"}`}>
							{letter}
						</li>
					))}
				</motion.ul>
			</div>
		</Link>
	);
};

export default TitleBanner;
