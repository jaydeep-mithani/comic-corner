import axios from "axios";

export const fetchHero = async () => {
  try {
    const formData = new FormData();
    formData.append("uname", localStorage.getItem("comic-corner-user"));
    const response = await axios.post(
      "https://comic-corner-backend.onrender.com/user/one",
      new URLSearchParams(formData).toString(),
      {
        headers: { "content-type": "application/x-www-form-urlencoded" },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
