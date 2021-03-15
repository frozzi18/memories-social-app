import axios from "axios";

const url = "http://localhost:5000/memories";

export const fetchPosts = () => axios.get(url);
