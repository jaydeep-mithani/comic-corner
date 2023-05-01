require("dotenv").config(); //To get the environment variables from .env file in the process object
const latestIssues = require("../Schemas/latestIssues");
const axios = require("axios");

const getLatestComics = async (req, res) => {
	const url = `https://comicvine.gamespot.com/api/issues/?api_key=${process.env.KEY}&sort=cover_date:desc&format=json`;
	const books = await latestIssues.find();
	const hourAgo = Date.now() - 60 * 60 * 1000;
	if (!books.length) {
		try {
			const response = await axios.get(url);
			await latestIssues.create({
				name: "Latest Issues",
				issues: response.data.results,
			});
			res.json(response.data.results);
		} catch (error) {
			res.json({ error: "unexpected error occured.", message: error });
		}
	} else if (books[0].updatedAt.getTime() < hourAgo) {
		try {
			const response = await axios.get(url);
			await latestIssues.updateOne({ name: "Latest Issues" }, { name: "Latest Issues", issues: response.data.results });
			res.json(response.data.results);
		} catch (err) {
			res.json({ error: "unexpected error occured.", message: err });
		}
	} else res.json(books[0].issues);
};

module.exports = getLatestComics;
