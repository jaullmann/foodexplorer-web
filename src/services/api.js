import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplo/rer-api-x65p.onrender.com",
  // baseURL: "http://localhost:4000",
  withCredentials: true
});