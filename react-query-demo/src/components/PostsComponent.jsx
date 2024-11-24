import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

function PostsComponent() {
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  };

  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery(["posts"], fetchPosts, {
    staleTime: 60000,
    cacheTime: 300000, 
    refetchOnWindowFocus: false, 
    keepPreviousData: true, 
  });

  const handleRefetch = () => {
    queryClient.invalidateQueries(["posts"]);
  };

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={handleRefetch}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
