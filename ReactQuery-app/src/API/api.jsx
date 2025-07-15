import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// fetch data using axios

// export const fetchPosts = () =>{
//     return api.get("/posts");
// }



// fetch data using react query
export const fetchPosts = async () => {
  const res = await api.get("/posts");
  return res.status === 200 ? res.data : [];
};
