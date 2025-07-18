import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// fetch data using axios

export const fetchPostsOld = () => {
  return api.get("/posts");
};

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
// delete data
export const deletePost = (id) => {
  return api.delete(`posts/${id}`);
};

// update data
export const UpdatePost = (id) => {
  return api.patch(`posts/${id}`, { title: "I updated here" });
};


// infinite scrolling
export const fetchUsers= async({pageParam = 1}) => {
try {
  const res = await axios.get(`https://api.github.com/users?per_page=10&page=${pageParam}`)
  return res.data;
} catch (error) {
  console.log(error)
}
};