import { Fragment } from "react";
import Hero from "../../components/hero/Hero";
import CCNavbar from "../../components/navbar/navbar";
import SearchBar from "../../components/search/SearchBar";
import ShowCaseCardFlip from "../../components/showcase/ShowCaseCardFlip/ShowCaseCardFlip";
import ShowCaseCardReveal from "../../components/showcase/ShowCaseCardReveal/ShowCaseCardReveal";
import TitleFold from "../../components/title/TitleFold/TitleFold";
import TitleSlice from "../../components/title/TitleSlice/TitleSlice";
import CCFooter from "../../components/footer/CCFooter";

const Home = () => {
    const carousel = [
        { url: "./assets/the-vertebrate.jpg", duration: 9000, id: 1 },
        { url: "./assets/DB.jpg", duration: 3000, id: 2 },
        { url: "./assets/jl.jpg", duration: 3000, id: 3 },
        { url: "./assets/op.jpg", duration: 3000, id: 4 },
    ];
    return (
        <Fragment>
            <div className={"container-fluid"}>
                <CCNavbar bs-class="mb-5" url={process.env.PUBLIC_URL} />
                <div className="row">
                    <div className={"col-11 mx-auto mb-5 "}>
                        <Hero
                            images={carousel}
                            bs-class="rounded-5 shadow overflow-hidden "
                        />
                    </div>
                </div>
                <TitleFold href='/comics/latest-comics' bs-class="mb-5">Latest Issues</TitleFold>
                <div className="container mb-5">
                    <ShowCaseCardFlip data={"latestIssues"} />
                </div>
                <TitleFold href='/comics/trending-comics' bs-class="mb-5">Trending Issues</TitleFold>
                <div className="container mb-5">
                    <ShowCaseCardFlip data={"trendingIssues"} />
                </div>
                <TitleFold href='/comics/popular-comics' bs-class="mb-5">Popular Issues</TitleFold>
                <div className="container mb-5">
                    <ShowCaseCardFlip data={"popularIssues"} />
                </div>
                <TitleSlice>Our Favourite Reads</TitleSlice>
                <div className="container mb-5">
                    <ShowCaseCardReveal imageIndex="1" />
                </div>
                <CCFooter />
            </div>
            <SearchBar />
        </Fragment>
    );
};

export default Home;
