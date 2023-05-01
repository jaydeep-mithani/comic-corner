require("dotenv").config(); //To get the environment variables from .env file in the process object
const axios = require("axios");

const getRecommended = async (req, res) => {
	const comics = [
		{ title: "One-Punch Man", genre: "Shonen-Perody, Superhero" },
		{ title: "One Piece", genre: "Comedy, Adventure" },
		{ title: "Batman", genre: "Superhero, Mystery" },
		{ title: "Justice League Of America", genre: "Superhero, Action" },
		{ title: "Dragon Ball", genre: "Shonen, Action" },
		{ title: "Sailor Moon", genre: "Shoujo, Fantasy" },
		{ title: "Amazing Spider-Man", genre: "Superhero, Sci-fi" },
		{ title: "Death Note", genre: "Dark-Fantasy, Mystery" },
		{ title: "That time I got reincarnated as a slime", genre: "Isekai, Sci-fi" },
		{ title: "Spy X Family", genre: "Comedy, Action" },
	];
	const issues = [];

	for (const comic of comics) {
		const url = `https://comicvine.gamespot.com/api/volumes/?api_key=${
			process.env.KEY
		}&format=json&sort=id:desc&filter=name:${encodeURIComponent(comic.title)}`;
		try {
			const response = await axios.get(url);
			issues.push({
				title: comic.title,
				genre: comic.genre,
				issues: response.data.results,
			});
		} catch (error) {
			console.log(error);
			res.json({ error: "unexpected error occured.", message: error });
		}
		// Delay between requests to avoid rate limiting
		await new Promise((resolve) => setTimeout(resolve, 1000));
	}
	res.json(issues);
};

module.exports = getRecommended;
