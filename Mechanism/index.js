require("dotenv").config(); //To get the environment variables from .env file in the process object

/* Third-party library imports */
const express = require("express"); //For serving client
const cors = require("cors"); //To enable cross origin
const bodyParser = require("body-parser"); //To parce request body
/* Custom file imports */
const connectDb = require("./DB/dbconnect"); //DB Connecion file
const userRoutes = require("./Routes/user"); //Fetch user routes
const comicVineRoutes = require("./Routes/comicVine"); //Fetch comic vine routes

/* Initiation process block */
const app = express();
connectDb();

/* Specifications block */
app.use(
	cors({
		origin: process.env.ORIGIN,
	})
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/user", userRoutes);
app.use("/comics", comicVineRoutes);

/* Server initiation */
app.listen(process.env.PORT, () => {
	console.log("Server connection initiated...\nActive port: " + process.env.PORT);
});
