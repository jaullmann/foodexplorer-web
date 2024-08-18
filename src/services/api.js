import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-api-x65p.onrender.com",
  withCredentials: true
});