/*
 Function to a new user into mongoDB database.
 */

const User = require("../Schemas/user"); //users table schema(structure)

const userAdd = async (req, res) => {
	try {
		await User.create({
			username: req.body.username,
			password: req.body.password,
			fname: req.body.fname,
			lname: req.body.lname,
			email: req.body.email,
		});
		res.json({ status: "success", message: "user added successfully." });
	} catch (err) {
		res.json({ error: "unexpected error occured.", message: err });
	}
};

module.exports = userAdd;
