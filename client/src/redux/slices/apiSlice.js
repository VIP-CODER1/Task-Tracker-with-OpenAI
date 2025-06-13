import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URI = "https://task-tracker-j6ni.onrender.com";

const baseQuery = fetchBaseQuery({ 
  baseUrl: API_URI + "/api",
  credentials: "include"
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
