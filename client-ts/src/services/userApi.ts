import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/api" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/users`,
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: `/users`,
        method: "POST",
        body: body,
      }),
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: `/users/login`,
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useCreateUserMutation, useLoginUserMutation } =
  userApiSlice;
