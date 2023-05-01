import { useState } from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import FireWall from "./Firewall";
import Signup from "../Pages/signup-page/Signup";
import Login from "../Pages/login-page/Login";
import Home from "../Pages/home/Home";
import Search from "../Pages/search-page/Search";
import Profile from "../Pages/profile/Profile";
import ComicDetail from "../Pages/comic-detail/ComicDetail";
import Reader from "../Pages/reader/reader";
import Browser from "../Pages/browser/Browser";
import About from "../Pages/about/About";
import NotFound from "../Pages/404/NotFound";

function Router() {
    const [isLogged, setIsLoggedIn] = useState(
        localStorage.getItem("comic-corner-user") ? true : false
    );

    const IfLogin = () => {
        if (isLogged && localStorage.getItem("comic-corner-user") === null) {
            setIsLoggedIn(false);
        }
        return <Navigate to={"/"} />;
    };

    return (
        <Routes>
            <Route
                path="/login"
                element={!isLogged ? <Login /> : <IfLogin />}
            />
            <Route
                path="/signup"
                element={!isLogged ? <Signup /> : <IfLogin />}
            />
            <Route element={<FireWall />}>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/comicDetail/:id" element={<ComicDetail />} />
                <Route path="/reader" element={<Reader />} />
                <Route path="/comics/:category" element={<Browser />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default Router;
