import axios from "axios";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(
      "https://comic-corner-backend.onrender.com/user/allUsers"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
