/*
 All routs for comic-vine API related operations.
 */

const express = require("express");
const getComic = require("../Functions/getComic");
const getLatestComics = require("../Functions/getLatestComics");
const getPopularComics = require("../Functions/getPopularComics");
const getRecommended = require("../Functions/getRecommended");
const getTrendingComics = require("../Functions/getTrendingComics");
const getComicById = require("../Functions/getComicById");

/* Creating routes paths for user operations */
const routes = express.Router();

/* Route definations */
routes.get("/latest", getLatestComics); // Route for getting new comics
routes.get("/trending", getTrendingComics); // Route for getting trending comics
routes.get("/popular", getPopularComics); // Route for getting popular comics
routes.get("/recommend", getRecommended); // Route for getting recommended comics
routes.post("/search", getComic); // Route for getting searched comics
routes.post("/byId", getComicById); // Route for getting searched comics

module.exports = routes;
