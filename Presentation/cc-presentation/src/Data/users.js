import axios from "axios";

export const fetchUsers = async () => {
	try {
		const response = await axios.get("http://localhost:1310/user/allUsers");
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
