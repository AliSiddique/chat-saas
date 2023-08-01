import { apiSlice } from "./APISlice";

let USERS_URL = "http://localhost:4000/api/users";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: data => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
        credentials: "include", // Pass credentials: 'include' to the request
        withCredentials: true,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
        credentials: "include", // Pass credentials: 'include' to the request
        withCredentials: true,
      }),
    }),
    register: builder.mutation({
      query: data => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
        credentials: "include", // Pass credentials: 'include' to the request
        withCredentials: true,
      }),
    }),
    updateUser: builder.mutation({
      query: data => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
        credentials: "include", // Pass credentials: 'include' to the request
        withCredentials: true,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
} = userApiSlice;
