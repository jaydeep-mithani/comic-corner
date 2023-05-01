import axios from "axios";

export const fetchHero = async () => {
	try {
		const formData = new FormData();
		formData.append("uname", localStorage.getItem("comic-corner-user"));
		const response = await axios.post("http://localhost:1310/user/one", new URLSearchParams(formData).toString(), {
			headers: { "content-type": "application/x-www-form-urlencoded" },
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};