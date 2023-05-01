require("dotenv").config(); //To get the environment variables from .env file in the process object
const trendingIssues = require("../Schemas/trendingIssues");
const axios = require("axios");

const getTrendingComics = async (req, res) => {
	const url = `https://comicvine.gamespot.com/api/issues/?api_key=${process.env.KEY}&sort=store_date&format=json`;
	const books = await trendingIssues.find();
	const hourAgo = Date.now() - 60 * 60 * 1000;
	if (!books.length) {
		try {
			const response = await axios.get(url);
			await trendingIssues.create({
				name: "Trending Issues",
				issues: response.data.results,
			});
			res.json(response.data.results);
		} catch (error) {
			res.json({ error: "unexpected error occured.", message: error });
		}
	} else if (books[0].updatedAt.getTime() < hourAgo) {
		try {
			const response = await axios.get(url);
			await trendingIssues.updateOne({ name: "Trending Issues" }, { name: "Trending Issues", issues: response.data.results });
			res.json(response.data.results);
		} catch (err) {
			res.json({ error: "unexpected error occured.", message: err });
		}
	} else res.json(books[0].issues);
};

module.exports = getTrendingComics;
