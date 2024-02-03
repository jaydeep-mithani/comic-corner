import axios from "axios";

export const comicDetail = async (id) => {
  try {
    const formData = new FormData();
    formData.append("id", id);
    const response = await axios.post(
      "https://comic-corner-backend.onrender.com/comics/byId",
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
