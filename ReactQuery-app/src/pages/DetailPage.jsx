import React from "react";
import { singlePost } from "../API/api";
import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router-dom";

function DetailPage() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["post", id],
    queryFn: () => singlePost(id),
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message || "Error fetching posts."}</p>;
  return (
    <div className="home-container">
      <h1>single page data {data.id}</h1>
      <ul className="posts-list">
        <li>
          <p>{data.id}</p>
          <p>{data.title}</p>
          <p>{data.body}</p>
        </li>
      </ul>
      <NavLink to="/data">
        <button>Go Back</button>
      </NavLink>
    </div>
  );
}

export default DetailPage;
