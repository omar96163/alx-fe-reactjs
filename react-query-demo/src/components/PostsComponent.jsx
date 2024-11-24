import React from "react";
import { useQuery } from "@tanstack/react-query";

function PostsComponent() {
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"], 
    queryFn: fetchPosts, 
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>There was an error fetching the posts.</p>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
