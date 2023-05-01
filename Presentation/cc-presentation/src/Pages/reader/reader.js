import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/fontawesome-free-solid";
import AccentButton from "../../components/button/ButtonMedal/ButtonMedal";

import classes from "./reader.module.css";

const Reader = () => {
    const pages = useState([]);
    const [isButtonVisible, setIsButtonVisible] = useState(true);

    const [currentPage, setCurrentPage] = useState(
        "./placeholder_pages/01.jpg"
    );

    useEffect(() => {
        let timeoutId;

        const handleMouseMove = () => {
            setIsButtonVisible(true);
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                setIsButtonVisible(false);
            }, 1500);
        };

        handleMouseMove();

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            clearTimeout(timeoutId);
        };
    }, []);

    for (let i = 0; i < 36; i += 1)
        pages.push(String(i + 1).padStart(2, "0") + ".jpg");

    const handlePrevious = () => {
        if (parseInt(currentPage.split(".")[1].split("/")[2]) !== 1)
            setCurrentPage(
                `./placeholder_pages/${String(
                    parseInt(currentPage.split(".")[1].split("/")[2]) - 1
                ).padStart(2, "0")}.jpg`
            );
        window.scrollTo(0, document.documentElement.scrollHeight);
    };
    const handleNext = () => {
        if (parseInt(currentPage.split(".")[1].split("/")[2]) !== 36)
            setCurrentPage(
                `./placeholder_pages/${String(
                    parseInt(currentPage.split(".")[1].split("/")[2]) + 1
                ).padStart(2, "0")}.jpg`
            );
        window.scrollTo(0, 0);
    };

    return (
        <div
            style={{
                backgroundImage: `linear-gradient(to top, #00000088, #000000aa), url("${process.env.PUBLIC_URL}/placeholder_pages/01.jpg")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
            }}
            className={"row g-0 " + classes.backdrop}
        >
            <AccentButton
                bs-class={
                    "w-100 py-4 py-lg-5 px-2 px-md-3 px-lg-4 fs-1 position-fixed top-50 start-0 translate-middle-y w-auto " +
                    `${isButtonVisible ? "opacity-100" : "opacity-0"}`
                }
                onClick={handlePrevious}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </AccentButton>
            <div
                className={
                    "col-12 col-sm-11 col-lg-10 m-auto " + classes.foreground
                }
            >
                <div className={classes.coating} />
                <img
                    src={currentPage}
                    alt="not found"
                    className="img-fluid my-5 rounded-3"
                />
            </div>
            <AccentButton
                bs-class={
                    "w-100 py-4 py-lg-5 px-2 px-md-3 px-lg-4 fs-1 position-fixed top-50 end-0 translate-middle-y w-auto " +
                    `${isButtonVisible ? "opacity-100" : "opacity-0"}`
                }
                onClick={handleNext}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </AccentButton>
        </div>
    );
};

export default Reader;
