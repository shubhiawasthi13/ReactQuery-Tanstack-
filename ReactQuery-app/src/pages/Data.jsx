import React, { useEffect, useState } from "react";
import { fetchPosts } from "../API/api";
import { useQuery } from "@tanstack/react-query";

function Data() {
  const { data ,isLoading,isError ,error} = useQuery({
    queryKey: ["posts"], //ex- usestate
    queryFn: fetchPosts, //ex- use effect
  });
  if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message || "Error fetching posts."}</p>;
  return (
    
    <div className="home-container">
      <h1>Fetch data using React Query</h1>
      <ul className="posts-list">
        {
          data?.slice(0, 3).map((d) => (
            <li key={d.id}>
              <p>{d.title}</p>
              <p>{d.body}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Data;
