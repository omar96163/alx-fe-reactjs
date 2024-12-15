import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

const fetchUserData = async (username, location, minRepos, page = 1) => {
  try {
    let query = `in:login ${username}`;

    if (location) {
      query += ` location:${location}`;
    }
    if (minRepos) {
      query += ` repos:>${minRepos}`;
    }

    const response = await axios.get(
      `${BASE_URL}?q=${query}&page=${page}&per_page=30`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export default fetchUserData;
