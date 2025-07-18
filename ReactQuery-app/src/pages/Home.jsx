import React, { useEffect, useState } from "react";
import { fetchPostsOld } from "../API/api";

function Home() {
  const [posts, setPosts] = useState([]);

  const getPostsData = async () => {
    try {
      const res = await fetchPostsOld();
      if (res.status === 200) {
        setPosts(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <div className="home-container">
      <h1>Fetch data using axios</h1>
      <ul className="posts-list">
        {posts.map(({ id, title, body }) => (
          <li key={id}>
            <p>{title}</p>
            <p>{body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
