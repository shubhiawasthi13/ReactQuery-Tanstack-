import React, { useEffect, useState } from "react";
import { fetchPosts, deletePost, UpdatePost } from "../API/api";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

function Data() {
  const [pageNumber, setPageNumber] = useState(0);

  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", pageNumber], //ex- usestate
    queryFn: () => fetchPosts(pageNumber), //ex- use effect
    placeholderData: keepPreviousData,

    //gcTime:1000
    // staleTime:5000

    // real time updates.............
    // refetchInterval:1000,
    // refetchIntervalInBackground:true
  });
  const handleDelete = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      queryClient.setQueryData(["posts", pageNumber], (el) => {
        return el?.filter((post) => post.id != id);
      }); //setQueryData use - access cache data
    },
  });
  const handleUpdate = useMutation({
    mutationFn: (id) => UpdatePost(id),
    onSuccess: (data, postId) => {
      queryClient.setQueryData(["posts", pageNumber], (postsData) => {
        return postsData?.map((post) => {
          return post.id === postId
            ? { ...post, title: data.data.title }
            : post;
        });
      }); //setQueryData use - access cache data
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message || "Error fetching posts."}</p>;
  return (
    <div className="home-container">
      <h1>Fetch data using React Query</h1>
      <ul className="posts-list">
        {data?.map((d) => (
          <li key={d.id}>
            <NavLink
              to={`/data/${d.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <p>{d.id}</p>
              <p>{d.title}</p>
              <p>{d.body}</p>
            </NavLink>
            <button
              onClick={() => handleDelete.mutate(d.id)}
              style={{
                marginRight: "20px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "4px",
              }}
            >
              Delete
            </button>
            <button
              onClick={() => handleUpdate.mutate(d.id)}
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
                padding: "4px",
              }}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      <div className="pagination-btn">
        <button
          disabled={pageNumber === 0 ? true : false}
          onClick={() => setPageNumber((prev) => prev - 3)}
        >
          PREV
        </button>
        <p>{pageNumber / 3 + 1}</p>
        <button onClick={() => setPageNumber((prev) => prev + 3)}>Next</button>
      </div>
    </div>
  );
}

export default Data;
