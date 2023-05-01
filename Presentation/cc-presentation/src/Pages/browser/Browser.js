import { useParams } from "react-router-dom";
import CCNavbar from "../../components/navbar/navbar";
import { Fragment, useEffect, useState } from "react";
import TitleBanner from "../../components/title/TitleBanner/TitleBanner";
import Loading from "../../components/loading/Loading";
import { fetchComics } from "../../Data/comics";
import Card from "../../components/card/Card";
import SearchBar from "../../components/search/SearchBar";
import AccentButton from "../../components/button/ButtonMedal/ButtonMedal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/fontawesome-free-solid";
import CCFooter from "../../components/footer/CCFooter";
import NotFound from "../404/NotFound";

const Browser = (props) => {
    const [validParam, setValidParam] = useState(0);
    const [issues, setIssues] = useState([]);
    const [loaded, setLoaded] = useState(12);

    const { category } = useParams();

    useEffect(() => {
        if (
            category.toLowerCase() === "latest-comics" ||
            category.toLowerCase() === "popular-comics" ||
            category.toLowerCase() === "trending-comics"
        )
            setValidParam(1);
        else setValidParam(-1);
    }, [validParam, category]);

    useEffect(() => {
        (async () => {
            try {
                if (category.toLowerCase() === "latest-comics") {
                    const fetch = await fetchComics("latest");
                    setIssues(fetch);
                } else if (category.toLowerCase() === "popular-comics") {
                    const fetch = await fetchComics("popular");
                    setIssues(fetch);
                } else if (category.toLowerCase() === "trending-comics") {
                    const fetch = await fetchComics("trending");
                    setIssues(fetch);
                } else setIssues([]);
            } catch (err) {
                setIssues([]);
                console.log("Failed to fetch latest issues.", err);
            }
        })();
    }, [category]);

    const handleLoadMore = () => {
        if (loaded + 5 < 100) setLoaded((val) => (val += 4));
        else setLoaded(100);
    };

    return validParam !== -1 ? (
        <Fragment>
            <CCNavbar url={process.env.PUBLIC_URL} />
            <TitleBanner>{category.split("-").join(" ")}</TitleBanner>
            <div className="mb-5">
                {issues && issues.length ? (
                    <div className="d-flex align-items-center justify-content-center flex-wrap gap-4">
                        {issues.slice(0, loaded).map(
                            (issue, ind) =>
                                ind < loaded && (
                                    <Card
                                        key={issue.id}
                                        id={issue.id}
                                        cover={issue.image.original_url}
                                        subtitle={issue.name}
                                    >
                                        {issue.volume.name}
                                    </Card>
                                )
                        )}
                    </div>
                ) : (
                    <div className="col-3 col-sm-2 col-md-1 mx-auto">
                        <Loading />
                    </div>
                )}
            </div>
            <div className="row g-0 justify-content-center">
                <AccentButton
                    onClick={handleLoadMore}
                    bs-class={
                        "fs-4 mb-5 px-4 py-2 col-10 col-lg-auto d-flex align-items-center justify-content-center gap-2 " +
                        `${loaded === 100 ? "d-none" : ""}`
                    }
                >
                    <FontAwesomeIcon icon={faChevronCircleDown} />
                    Load more
                </AccentButton>
            </div>
            <CCFooter />
            <SearchBar />
        </Fragment>
    ) : (
        <NotFound />
    );
};

export default Browser;
