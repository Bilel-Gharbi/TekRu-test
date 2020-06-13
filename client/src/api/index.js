import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "x-auth-token": localStorage.getItem("token"),
  },
});

export default API;
