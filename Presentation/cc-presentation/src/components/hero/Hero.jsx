import Carousel from "react-bootstrap/Carousel";
import classes from "./Hero.module.css";

const Hero = (props) => {
	return (
		<Carousel className={props["bs-class"]}>
			{props.images.map((image) => (
				<Carousel.Item interval={image.duration} className={classes.item} key={image.id}>
					<img className="d-block w-100" src={image.url} alt="slide" />
					<Carousel.Caption>
						<h3>{image.label}</h3>
						<p>{image.subtitle}</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default Hero;
