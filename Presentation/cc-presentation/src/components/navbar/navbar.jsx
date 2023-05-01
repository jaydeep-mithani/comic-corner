import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAddressCard,
    faMagic,
    faFire,
    faChartLine,
} from "@fortawesome/fontawesome-free-solid";

import ButtonNavBars from "../button/ButtonNavBars/ButtonNavBars";

import classes from "./navbar.module.css";
import ProfileIcon from "../profile/ProfileIcon";
import ButtonLit from "../button/ButtonLit/ButtonLit";
import { Link, useNavigate } from "react-router-dom";

const CCNavbar = (props) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("comic-corner-user");
        navigate("/login");
    };

    return (
        <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                delay: 0.5,
                duration: 0.5,
                bounce: 0.7,
                type: "spring",
            }}
            className={`row col-11 mx-auto my-4 ${classes["cc-navbar"]} ${props["bs-class"]}`}
        >
            <Navbar
                bg="dark"
                variant="dark"
                className="rounded rounded-3 shadow"
                expand="lg"
            >
                <Container fluid>
                    <Navbar.Brand>
                        <Link
                            to="/"
                            className="text-decoration-none align-self-center"
                        >
                            <article className="mx-sm-3 fs-2">
                                <span>C</span>
                                <span>C</span>
                            </article>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        className={"ms-auto p-0 border-0 " + classes.bars}
                    >
                        <ButtonNavBars />
                    </Navbar.Toggle>
                    <div className={"d-lg-none me-2"}>
                        <ProfileIcon url={props.url} />
                    </div>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        ></Nav>
                        <Nav className="ms-auto me-3 align-items-center">
                            <Link
                                to="/comics/latest-comics"
                                className="text-decoration-none"
                            >
                                <div
                                    className={
                                        classes["menu-box"] + " mb-3 mb-lg-auto"
                                    }
                                >
                                    <span className={classes.links}>
                                        <FontAwesomeIcon icon={faMagic} />{" "}
                                        Latest
                                    </span>
                                    <span className={classes.border}></span>
                                </div>
                            </Link>
                            <Link
                                to="/comics/popular-comics"
                                className="text-decoration-none"
                            >
                                <div
                                    className={
                                        classes["menu-box"] + " mb-3 mb-lg-auto"
                                    }
                                >
                                    <span className={classes.links}>
                                        <FontAwesomeIcon icon={faFire} />{" "}
                                        Popular
                                    </span>
                                    <span className={classes.border}></span>
                                </div>
                            </Link>
                            <Link
                                to="/comics/trending-comics"
                                className="text-decoration-none"
                            >
                                <div
                                    className={
                                        classes["menu-box"] + " mb-3 mb-lg-auto"
                                    }
                                >
                                    <span className={classes.links}>
                                        <FontAwesomeIcon icon={faChartLine} />{" "}
                                        Trending
                                    </span>
                                    <span className={classes.border}></span>
                                </div>
                            </Link>
                            <Link to="/about" className="text-decoration-none">
                                <div
                                    className={
                                        classes["menu-box"] + " mb-3 mb-lg-auto"
                                    }
                                >
                                    <span className={classes.links}>
                                        <FontAwesomeIcon icon={faAddressCard} />{" "}
                                        About
                                    </span>
                                    <span className={classes.border}></span>
                                </div>
                            </Link>
                            <div className={"d-none d-lg-block me-5"}>
                                <ProfileIcon url={props.url} />
                            </div>
                            <div
                                className={
                                    classes.turnoff + " d-block col-12 col-lg-1"
                                }
                            >
                                <ButtonLit
                                    bs-class="py-2 px-3 w-100"
                                    onClick={handleLogout}
                                >
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/logout.png`}
                                        alt=">>"
                                        className="img-fluid"
                                    />
                                </ButtonLit>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </motion.div>
    );
};

export default CCNavbar;
