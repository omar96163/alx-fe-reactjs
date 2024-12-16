import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white p-2 rounded w-full"
        >
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userData && (
        <div className="mt-4 border p-4 rounded">
          <img
            src={userData.avatar_url}
            alt="Avatar"
            className="w-16 h-16 rounded-full"
          />
          <h3 className="text-lg font-bold">
            {userData.name || "No Name Provided"}
          </h3>
          <p className="text-gray-600">Username: {userData.login}</p>
          <p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              View Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
