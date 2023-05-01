import TitleTyping from "../title/TitleTyping/TitleTyping";
import classes from "./Card.module.css";

const Card = (props) => {
	return (
		<div className={props["bs-class"]}>
			<div className={classes["flip-box"] + " mx-auto"}>
				<div className={classes["flip-box-inner"]}>
					<div className={classes["flip-box-front"]}>
						<img src={props.cover} alt="book" />
					</div>
					<div className={classes["flip-box-back"]}>
						<h2 className="fs-4 pb-4">{props.children}</h2>
						<p className="fs-4 px-4">
							Issue:
							<br /> {props.subtitle}
						</p>
						<TitleTyping width="50%" href={"comicDetail/" + props.id} bs-class="fs-4">Show more details</TitleTyping>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
