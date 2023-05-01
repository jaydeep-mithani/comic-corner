import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, spring } from "framer-motion";

import AccentButton from "../button/ButtonMedal/ButtonMedal";
import hasProfile from "../../controller/hasProfile";

import classes from "./ProfileIcon.module.css";
import { fetchHero } from "../../Data/hero";

const ProfileIcon = (props) => {
    const [has, setHas] = useState(false);
    const [ext, setExt] = useState("");
    const [initial, setInitial] = useState("");

    useEffect(() => {
        fetchHero().then((res) => {
            setInitial(res[0].fname);
        });
    }, []);

    const name = localStorage.getItem("comic-corner-user");

    if (name) {
        hasProfile(`${props.url}/images/profile/${name}`).then((result) => {
            if (result.exists) {
                setHas(true);
                setExt(result.extension);
            } else setHas(false);
        });
        const bg = has
            ? `url("${props.url}/images/profile/${name}.${ext}")`
            : "";
        return (
            <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: [1, 1.7, 1.3] }}
                transition={{ bounce: 0.8, type: spring, duration: 0.3 }}
            >
                <Link
                    className={classes.profile}
                    style={{ backgroundImage: bg }}
                    to="/profile"
                >
                    {!has && initial && initial[0].toUpperCase()}
                </Link>
            </motion.div>
        );
    } else
        return (
            <Link to="/login" className="text-decoration-none">
                <AccentButton>Login</AccentButton>
            </Link>
        );
};

export default ProfileIcon;
