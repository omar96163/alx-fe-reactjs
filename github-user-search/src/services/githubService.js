import axios from "axios";

const BASE_URL = "https://api.github.com/users";

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
export default fetchUserData;
