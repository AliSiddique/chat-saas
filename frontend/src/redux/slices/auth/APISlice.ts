import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
let baseUrl;
if (process.env.NODE_ENV === "development") {
  baseUrl = "http://localhost:4000";
} else {
  baseUrl = process.env.NEXT_PUBLIC_API_URL;
}
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:4000",
  credentials: "include", // Set credentials: 'include' globally
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: builder => ({}),
});
