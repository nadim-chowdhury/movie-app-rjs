import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "3b4bd7933a3f16aecaf0194d3767e8c8";

const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjRiZDc5MzNhM2YxNmFlY2FmMDE5NGQzNzY3ZThjOCIsInN1YiI6IjY0M2E0OGY0MzEyMzQ1MDUxOGQ4MmMwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kn4u2vJZbtJIEB_6xoZo1SvqGUMQ4SdtpcO66-3T4iI",
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
