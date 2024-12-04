import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),

    endpoints: (builder) => ({
        getPosts: builder.query({
            query: (limit = 5) => `/posts?_limit=${limit}`,
        }),
        getPostById: builder.query({
            query: (id) => `/posts/${id}`
        })



    }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = apiSlice;