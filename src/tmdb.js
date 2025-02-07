import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODhmY2RiODYwOWI3Nzg5YTk1ODFjMDhiMjlhOWZhYyIsIm5iZiI6MTczODg1NjkyMC4wNzUsInN1YiI6IjY3YTRkOWQ4MWZjYmZlZTU0ZDJmZGU3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U9rU9EivZiOMBL__v_DFIaCswxK8kT6C_JM3xXb-tQg";
const BASE_URL = "https://api.themoviedb.org/3";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  },
});

export const getTrendToday = async () => {
  const { data } = await axiosInstance.get("/trending/movie/day");
  return data.results;
};

export const getById = async (movieId) => {
  const { data } = await axiosInstance.get(`/movie/${movieId}`);
  return data;
};

export const getMovieCast = async (movieId) => {
  const { data } = await axiosInstance.get(`/movie/${movieId}/credits`);
  return data.cast;
};

// export const getMovieRev = async (movieId) => {
//   const response = await axiosInstance.get(`/movie/${movieId}/reviews`);
//   return response.data.results;
// };
