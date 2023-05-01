import classes from "./ShowCaseCardReveal.module.css";
import { motion } from "framer-motion";
import TitleAfterImage from "../../title/TitleAfterImage/TitleAfterImage";
import TitleGLow from "../../title/TitleGlow/TitleGlow";
import { fetchComics } from "../../../Data/comics";
import { useEffect, useState } from "react";
import Loading from "../../loading/Loading";
import { getRecomended, setRecommended } from "../../../Data/recomended";

const cardVariants = {
    offscreen: {
        y: 440,
        rotate: 100,
    },
    onscreen: {
        y: -70,
        rotate: -7,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

const Card = (props) => {
    const [altImg, setAltImg] = useState(0);

    useEffect(() => {
        const alt = [
            "Death Note",
            "Justice League Of America",
            "Sailor Moon",
            "Amazing Spider-Man",
        ];
        if (alt.includes(props.issue.title)) setAltImg(1);
        else setAltImg(0);
    }, [props.issue.title]);

    return (
        <motion.div
            className={classes["card-container"] + " col-12 col-lg-10 col-xl-6"}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
        >
            <div className={classes.splash}>
                <TitleGLow href={props.path}>{props.issue.title}</TitleGLow>
                <TitleAfterImage label="Genres:">
                    {props.issue.genre}
                </TitleAfterImage>
            </div>
            <motion.div
                className={classes.card}
                variants={cardVariants}
                style={{
                    backgroundImage: `URL('${props.issue.issues[altImg].image.original_url}')`,
                }}
            ></motion.div>
        </motion.div>
    );
};

const ShowCaseCardReveal = () => {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        if (!getRecomended()) {
            (async () => {
                try {
                    const fetch = await fetchComics("recommend");
                    setIssues(fetch);
                    setRecommended(fetch);
                } catch (err) {
                    setIssues([]);
                    console.log("Failed to fetch latest issues.");
                }
            })();
        } else setIssues(getRecomended());
    }, []);

    return (
        <div className="d-flex align-items-center justify-content-center flex-column">
            {issues && issues.length ? (
                issues.map((issue) => (
                    <Card
                        issue={issue}
                        key={issue.issues[0].id}
                        path={"/comicDetail/" + issue.issues[0].first_issue.id}
                    />
                ))
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default ShowCaseCardReveal;
