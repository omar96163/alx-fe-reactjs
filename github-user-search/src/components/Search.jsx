import React, { useState } from "react";
import fetchUserData from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setUsername(e.target.value);
  };

  const handleLocationInput = (e) => {
    setLocation(e.target.value);
  };

  const handleMinReposInput = (e) => {
    setMinRepos(e.target.value);
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);
    try {
      const data = await fetchUserData(username, location, minRepos);
      if (data.items && data.items.length > 0) {
        setUserData(data.items);
      } else {
        throw new Error("No users found with the given criteria");
      }
    } catch (err) {
      setError("Looks like we cant find users");
    } finally {
      setLoading(false);
    }
    setUsername("");
    setLocation("");
    setMinRepos("");
  };

  return (
    <div>
      <form
        onSubmit={handleForm}
        className="space-y-4 p-4 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto"
      >
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={handleInput}
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={handleLocationInput}
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={handleMinReposInput}
          className="w-full px-4 py-2 border rounded-md"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {userData && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          {userData.map((user) => (
            <div key={user.login} className="mb-4">
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                style={{ width: "150px", borderRadius: "50%" }}
              />
              <h2>{user.name || "No Name Available"}</h2>
              <p>Username: {user.login}</p>
              <p>Location: {user.location || "Not Available"}</p>
              <p>Public Repos: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Visit GitHub Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
