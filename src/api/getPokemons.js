import axiosInstance from "./config";
axiosInstance
  .get(`/pokemon?limit=${10}`)
  .then((response) => console.log(response.data))
  .catch((err) => console.error(err));

export const getPokemons = (limit = 100) =>
  axiosInstance
    .get(`/pokemon?limit=${limit}`)
    .then((response) => console.log(response.data))
    .catch((err) => console.error(err));
