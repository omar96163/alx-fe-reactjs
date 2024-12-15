import React, { useState } from "react";
import fetchUserData from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setUsername(e.target.value);
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);
    try {
      const data = await fetchUserData(username);
      if (data.login) {
        setUserData(data);
      } else {
        throw new Error("User not found");
      }
    } catch (err) {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
    setUsername("");
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={handleInput}
        />
        <button type="submit">Submit</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {userData && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s avatar`}
            style={{ width: "150px", borderRadius: "50%" }}
          />
          <h2>{userData.name || "No Name Available"}</h2>
          <p>Username: {userData.login}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
