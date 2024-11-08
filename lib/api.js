import axios from "axios";

const api = axios.create({
  baseURL: "https://api.boomavto.ru/",
});

export default api;
