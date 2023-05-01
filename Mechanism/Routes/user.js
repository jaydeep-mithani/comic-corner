/*
 All routs for user related operations.
 */

const express = require("express");
const multer = require("multer"); //For file upload
const path = require("path"); //To get the file extention

const getAllUsers = require("../Functions/getAllUsers");
const getUser = require("../Functions/getUser");
const userAdd = require("../Functions/userAdd");

/* Creating routes paths for user operations */
const routes = express.Router();

/* Multer setup for image upload */
const storage = multer.diskStorage({
	destination: (req, file, path) => {
		path(null, "../Presentation/cc-presentation/public/images/profile");
	},
	filename: (req, file, operation) => {
		operation(null, req.body.username + path.extname(file.originalname));
	},
});
const upload = multer({ storage });

/* Route definations */
routes.get("/allUsers", getAllUsers); // Route for getting all data from users collection
routes.post("/one", getUser); // Route for getting a specific user data from users collection
routes.post("/add", upload.single("profilePic" /* Name attribue of file upload input */), userAdd); //route for adding a new user in the users collection

module.exports = routes;
