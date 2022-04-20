import axios from "axios";

//const URL = process.env.POKEAPI || "https://pokeapi.co/api/v2/";
const URL = "https://pokeapi.co/api/v2/";

const axiosInstance = axios.create({
  baseUrl: URL,
});

export default axiosInstance;
