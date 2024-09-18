import axios from "axios";

export const api = axios.create({
  // baseURL: "https://foodexplorer-api-x65p.onrender.com",
  baseURL: "http://localhost:4000",
  withCredentials: true
});