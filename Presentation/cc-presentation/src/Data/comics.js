import axios from "axios";

export const fetchComics = async (type) => {
  try {
    const response = await axios.get(
      "https://comic-corner-backend.onrender.com/comics/" + type
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
