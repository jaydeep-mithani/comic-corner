const User = require("../Schemas/user");

const getAllUsers = async (req, res) => {
	try {
		const allUsers = await User.find();
		res.json(allUsers);
	} catch (err) {
		res.json({ error: "unexpected error occured.", message: err });
	}
};

module.exports = getAllUsers;
