import axios from "axios";

export const fetchComics = async (type) => {
	try {
		const response = await axios.get("http://localhost:1310/comics/" + type);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
