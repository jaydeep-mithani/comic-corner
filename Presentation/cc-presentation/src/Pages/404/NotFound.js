import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";

import AccentButton from "../../components/button/ButtonMedal/ButtonMedal";

import classes from "./NotFound.module.css";

const NotFound = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div
                className={
                    "bg-dark rounded-4 shadow p-4 mx-auto " + classes.box
                }
            >
                <p className={"fs-3 mt-3 " + classes.note}>
                    DANGER: You're crossing an uncharted territory. You must
                    turn back now!!
                </p>
                <p className={"fs-2 mt-3 " + classes.note}>
                    {`( page not found! )`}
                </p>
                <div className="mx-auto">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/danger.png`}
                        className={
                            "img-fluid danger my-5 p-4 rounded-circle shadow " +
                            classes.danger
                        }
                        alt="danger-sign"
                    />
                </div>
                <div className={classes.code}>
                    <span>4</span>
                    <span>0</span>
                    <span>4</span>
                </div>
                <div className="pb-2"></div>
                <Link to="/" className="text-decoration-none">
                    <AccentButton bs-class="mt-5 d-flex align-items-center justify-content-center gap-2 px-5 py-2 fs-5 mx-auto">
                        <FontAwesomeIcon icon={faHandPointLeft} />
                        Return Home
                    </AccentButton>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
