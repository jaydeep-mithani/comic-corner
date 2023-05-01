require("dotenv").config(); //To get the environment variables from .env file in the process object
const axios = require("axios");

const getComicById = async (req, res) => {
    const url = `https://comicvine.gamespot.com/api/issue/4000-${req.body.id}?api_key=${process.env.KEY}&format=json`;
    try {
        const response = await axios.get(url);
        const comics = response.data.results;
        if (comics.length === 0)
            res.json({ error: "id not found", message: "an error occured." });
        else res.json(comics);
    } catch (error) {
        console.log(error);
    }
};

module.exports = getComicById;
