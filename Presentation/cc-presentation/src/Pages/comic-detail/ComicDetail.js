import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { comicDetail } from "../../Data/comicDetail";
import Loading from "../../components/loading/Loading";
import TitleSlice from "../../components/title/TitleSlice/TitleSlice";
import CCNavbar from "../../components/navbar/navbar";

import classes from "./ComicDetail.module.css";
import CCFooter from "../../components/footer/CCFooter";
import ButtonLit from "../../components/button/ButtonLit/ButtonLit";
import NotFound from "../404/NotFound";

const removeTags = (str) => {
    if (str === null || str === "") return false;
    else str = str.toString();

    // regular expression to remove HTML tags
    return str.replace(/<[^>]*>/g, "");
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();

    // add ordinal suffix to day
    let daySuffix;
    if (day === 1 || day === 21 || day === 31) {
        daySuffix = "st";
    } else if (day === 2 || day === 22) {
        daySuffix = "nd";
    } else if (day === 3 || day === 23) {
        daySuffix = "rd";
    } else {
        daySuffix = "th";
    }

    return `${month} ${day}${daySuffix}, ${year}`;
};

const ComicDetail = () => {
    const [details, setDetails] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        if (!isNaN(Number(id)))
            comicDetail(id).then((res) => {
                if (res.error) setNotFound(true);
                else setDetails(res);
            });
    }, [id]);

    return (
        <Fragment>
            {isNaN(Number(id)) || notFound ? (
                <NotFound />
            ) : details ? (
                <Fragment>
                    <CCNavbar bs-class="mb-5" url={process.env.PUBLIC_URL} />
                    <div className="row g-0">
                        <TitleSlice bs-class="rounded-3 my-5" fs="f-md">
                            {details.volume.name}
                        </TitleSlice>
                        <div className="col-11 mx-auto bg-dark p-3 p-sm-5 rounded-4 shadow mb-5">
                            <div className="row g-0">
                                <div className="col-12 col-lg-5 mb-5 text-start">
                                    <img
                                        src={details.image.original_url}
                                        className="img-fluid rounded-3 shadow"
                                        alt={details.name + " cover"}
                                    />
                                </div>
                                <div className="col-12 col-lg-7">
                                    <div className="row g-0">
                                        <div className="col-12 col-lg-11 ms-lg-auto text-start text-lg-end mb-4">
                                            <h2 className={classes.label}>
                                                Issue Name
                                            </h2>
                                            <h4 className="text-white fs-2">
                                                {details.name
                                                    ? details.name
                                                    : "N/A"}
                                            </h4>
                                        </div>
                                        <div className="col-12 col-lg-11 ms-lg-auto text-start text-lg-end mb-4">
                                            <h2 className={classes.label}>
                                                Issue Number
                                            </h2>
                                            <h4 className="text-white fs-2">
                                                {details.issue_number
                                                    ? details.issue_number
                                                    : "N/A"}
                                            </h4>
                                        </div>
                                        <div className="col-12 col-lg-11 ms-lg-auto text-start text-lg-end mb-4">
                                            <h2 className={classes.label}>
                                                Description
                                            </h2>
                                            <h4 className="text-white fs-5 text-white-50 text-justified">
                                                {details.description
                                                    ? removeTags(
                                                          details.description
                                                      )
                                                    : "N/A"}
                                            </h4>
                                        </div>
                                        <div className="col-12 col-lg-11 ms-lg-auto text-start text-lg-end mb-4">
                                            <h2 className={classes.label}>
                                                Known Team
                                            </h2>
                                            <h4 className="text-white fs-5 text-white opacity-75 text-justified">
                                                {details.person_credits ? (
                                                    <table className="ms-lg-auto">
                                                        <thead>
                                                            <tr>
                                                                <th
                                                                    className={
                                                                        classes.person +
                                                                        " pe-4 fs-4"
                                                                    }
                                                                >
                                                                    Name
                                                                </th>
                                                                <th
                                                                    className={
                                                                        classes.person +
                                                                        " pe-2 fs-4"
                                                                    }
                                                                >
                                                                    Role
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {details.person_credits
                                                                ? details.person_credits.map(
                                                                      (
                                                                          person
                                                                      ) => (
                                                                          <tr
                                                                              key={
                                                                                  person.id
                                                                              }
                                                                          >
                                                                              <td className="pe-4 fs-4 text-white">
                                                                                  {person.name
                                                                                      ? person.name
                                                                                      : "N/A"}
                                                                              </td>
                                                                              <td className="fs-4 text-white">
                                                                                  {person.role
                                                                                      ? person.role
                                                                                      : "N/A"}
                                                                              </td>
                                                                          </tr>
                                                                      )
                                                                  )
                                                                : "N/A"}
                                                        </tbody>
                                                    </table>
                                                ) : (
                                                    "N/A"
                                                )}
                                            </h4>
                                        </div>
                                        <div className="col-12 col-lg-11 ms-lg-auto text-start text-lg-end mb-4">
                                            <h2 className={classes.label}>
                                                Release Date
                                            </h2>
                                            <h4 className="text-white fs-4 text-white text-justified">
                                                {details.cover_date
                                                    ? formatDate(
                                                          details.cover_date
                                                      )
                                                    : "N/A"}
                                            </h4>
                                        </div>
                                        <div className="col-12 col-lg-11 ms-lg-auto text-start text-lg-end mb-4">
                                            <h2 className={classes.label}>
                                                Storefront Date
                                            </h2>
                                            <h4 className="text-white fs-4 text-white text-justified">
                                                {details.store_date
                                                    ? formatDate(
                                                          details.store_date
                                                      )
                                                    : "N/A"}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to={"/reader"}>
                                <ButtonLit bs-class="mt-5 fs-5 col-12 col-lg-auto">
                                    Open Sesame
                                </ButtonLit>
                            </Link>
                        </div>
                    </div>
                    <CCFooter />
                </Fragment>
            ) : (
                <div className="row g-0 vh-100">
                    <div className="col-auto m-auto">
                        <Loading />
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default ComicDetail;
