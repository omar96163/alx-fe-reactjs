import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q";

/**
 * Fetch users from GitHub API with advanced search criteria
 * @param {string} searchTerm - The main search term (e.g., username).
 * @param {string} location - The location filter for users.
 * @param {number} minRepos - The minimum number of repositories filter.
 * @returns {Promise<Object>} - Returns the search results from the GitHub API.
 */
export const fetchUsers = async (searchTerm, location = "", minRepos = 0) => {
  try {
    // Build the query string based on provided parameters
    let query = `${searchTerm}`;
    if (location) query += `+location:${location}`;
    if (minRepos > 0) query += `+repos:>=${minRepos}`;

    // Make the API call
    const response = await axios.get(`${BASE_URL}?q=${query}`);
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Unable to fetch users from GitHub API.");
  }
};
