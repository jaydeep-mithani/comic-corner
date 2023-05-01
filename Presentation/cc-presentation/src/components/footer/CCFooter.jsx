import { Link } from "react-router-dom";
import classes from "./CCFooter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAddressCard,
    faChartLine,
    faFire,
    faHome,
    faMagic,
    faMapSigns,
    faMobileAlt,
    faPaperPlane,
} from "@fortawesome/fontawesome-free-solid";

const CCFooter = (props) => {
    return (
        <div className="container-fluid g-0">
            <div className="row g-0 mb-5">
                <div className="col-11 mx-auto bg-dark rounded-4 shadow p-2">
                    <div className="row mx-2 my-3">
                        <div className="col-12 col-lg-5">
                            <div
                                className={
                                    classes["cc-footer"] +
                                    " p-3 mb-4 text-start rounded-4 shadow " +
                                    classes.gradient
                                }
                            >
                                <article className="mx-sm-3 fs-2">
                                    <span>C</span>
                                    <span>C</span>
                                </article>
                            </div>
                            <div
                                className={
                                    classes.content +
                                    " p-3 text-start rounded-4 shadow text-white-50 " +
                                    classes.gradient
                                }
                            >
                                Comic Corener is a one of a kind place for all
                                you Comic Books, Manga, Graphic Novels or
                                BD&#40;Bandes Dessinées&#41; enthusiasts and-or
                                even casual readears are sure to find something
                                of their interest here and there. We built this
                                platform with love for comic books and the likes
                                so we're confident on what we have to offer here
                                is sure to catch your eye. We're have a huge
                                collection for everyone to browse, so since
                                you're here already, feel free to look through
                                your heart's content.
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div
                                className={
                                    "p-3 mb-4 mt-3 mt-lg-0 text-start rounded-4 shadow text-center text-white fs-3 " +
                                    classes.gradient
                                }
                            >
                                Quick Links
                            </div>
                            <div
                                className={
                                    classes.content +
                                    " p-3 text-start rounded-4 shadow text-white-50 d-flex flex-column align-items-center justify-content-center " +
                                    classes.gradient
                                }
                            >
                                <Link
                                    to="/"
                                    className={
                                        "w-100 p-2 m-1 mb-2 bg-dark rounded-3 shadow-sm text-center text-decoration-none text-white-50 " +
                                        classes.qLink
                                    }
                                >
                                    <FontAwesomeIcon icon={faHome} /> Home
                                </Link>
                                <Link
                                    to="/comics/latest-comics"
                                    className={
                                        "w-100 p-2 m-1 mb-2 bg-dark rounded-3 shadow-sm text-center text-decoration-none text-white-50 " +
                                        classes.qLink
                                    }
                                >
                                    <FontAwesomeIcon icon={faMagic} /> Latest
                                </Link>
                                <Link
                                    to="/comics/popular-comics"
                                    className={
                                        "w-100 p-2 m-1 mb-2 bg-dark rounded-3 shadow-sm text-center text-decoration-none text-white-50 " +
                                        classes.qLink
                                    }
                                >
                                    <FontAwesomeIcon icon={faFire} /> Popular
                                </Link>
                                <Link
                                    to="/comics/trending-comics"
                                    className={
                                        "w-100 p-2 m-1 mb-2 bg-dark rounded-3 shadow-sm text-center text-decoration-none text-white-50 " +
                                        classes.qLink
                                    }
                                >
                                    <FontAwesomeIcon icon={faChartLine} />{" "}
                                    Trending
                                </Link>
                                <Link
                                    to="/about"
                                    className={
                                        "w-100 p-2 m-1 mb-2 bg-dark rounded-3 shadow-sm text-center text-decoration-none text-white-50 " +
                                        classes.qLink
                                    }
                                >
                                    <FontAwesomeIcon icon={faAddressCard} />{" "}
                                    About
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div
                                className={
                                    "p-3 mb-4 mt-3 mt-lg-0 text-start rounded-4 shadow text-center text-white fs-3 " +
                                    classes.gradient
                                }
                            >
                                Yell at us directly
                            </div>
                            <div className="row g-0 my-3">
                                <div
                                    className={
                                        classes.content +
                                        " p-3 text-start rounded-4 shadow text-white-50 col-auto " +
                                        classes.gradient
                                    }
                                >
                                    <FontAwesomeIcon icon={faMapSigns} />
                                </div>
                                <div
                                    className={
                                        classes.content +
                                        " ms-3 p-3 text-start rounded-4 shadow text-white-50 col m-auto " +
                                        classes.gradient
                                    }
                                >
                                    28 Main Road, North Tonawanda,ny, 14120
                                    United States
                                </div>
                            </div>
                            <div className="row g-0 my-3">
                                <div
                                    className={
                                        classes.content +
                                        " p-3 text-start rounded-4 shadow text-white-50 col-auto m-auto " +
                                        classes.gradient
                                    }
                                >
                                    <FontAwesomeIcon icon={faMobileAlt} />
                                </div>
                                <div
                                    className={
                                        classes.content +
                                        " ms-3 p-3 text-start rounded-4 shadow text-white-50 col " +
                                        classes.gradient
                                    }
                                >
                                    28 Main Road, North Tonawanda,ny, 14120
                                    United States
                                </div>
                            </div>
                            <div className="row g-0 my-3">
                                <div
                                    className={
                                        classes.content +
                                        " p-3 text-start rounded-4 shadow text-white-50 col-auto m-auto " +
                                        classes.gradient
                                    }
                                >
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </div>
                                <div
                                    className={
                                        classes.content +
                                        " ms-3 p-3 text-start rounded-4 shadow text-white-50 col " +
                                        classes.gradient
                                    }
                                >
                                    query@comiccorner.com
                                </div>
                            </div>
                        </div>
                        <div
                            className={
                                "p-3 rounded-4 d-flex flex-wrap align-items-center justify-content-center my-3 text-white fs-4 " +
                                classes.gradient
                            }
                        >
                            Copyright © 2023-2024 Comic Corner - All rights
                            reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CCFooter;
