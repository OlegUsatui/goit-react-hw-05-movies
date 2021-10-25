import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "ecadeeef337d50b4de43abc10566a6ee";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = { api_key: API_KEY, language: "en-US" };

export const fetchTrandingMovies = async (timeWindow = "day") => {
  return await axios.get(`/trending/movie/${timeWindow}`);
};

export const fetchMoviesByName = async (query, page = 1) => {
  return await axios.get("/search/movie", {
    params: {
      query,
      page,
      include_adult: false,
    },
  });
};

export const fetchMoviesById = async (id) => {
  return await axios.get(`/movie/${id}`);
};

export const fetchActorsByMovieId = async (id) => {
  return await axios.get(`/movie/${id}/credits`);
};

export const fetchReviewsByMovieId = async (id, page = 1) => {
  return await axios.get(`/movie/${id}/reviews`, {
    params: {
      page,
    },
  });
};
