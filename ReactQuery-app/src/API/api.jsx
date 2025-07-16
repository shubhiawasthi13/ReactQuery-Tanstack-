import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// fetch data using axios

// export const fetchPosts = () =>{
//     return api.get("/posts");
// }



// fetch data using react query
export const fetchPosts = async (pageNumber) => {
  const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`);
  return res.status === 200 ? res.data : [];
};
 // fetch single data
export const singlePost = async (id) => {
  const res = await api.get(`posts/${id}`);
  return res.status === 200 ? res.data : [];
};
