require("dotenv").config(); //To get the environment variables from .env file in the process object
const axios = require("axios");

const getComic = async (req, res) => {
	const url = `https://comicvine.gamespot.com/api/search/?api_key=${process.env.KEY}&format=json&resources=issue&resource_type=volume&offset=${req.body.offset}&query=${req.body.search}`;
	try {
		const response = await axios.get(url);
		const comics = response.data.results;
		res.json(comics);
	} catch (error) {
		console.log(error);
	}
};

module.exports = getComic;
