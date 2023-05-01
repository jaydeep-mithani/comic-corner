const user = require("../Schemas/user");

const getUser = async (req, res) => {
	try {
		const uData = await user.find({ username: req.body.uname });
		res.json(uData);
	} catch (err) {
		res.json({ error: "unexpected error occured.", message: err });
	}
};

module.exports = getUser;
