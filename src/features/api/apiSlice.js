import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    tagTypes: ['posts', 'post'], //For Refreshing
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: (limit = 5) => `/posts?_limit=${limit}`,
            // keepUnusedDataFor: 6
            providesTags: ['posts'] //For Refreshing Posts ( Posts.jsx)
        }),
        getPostById: builder.query({
            query: (id) => `/posts/${id}`,
            providesTags: (result, error, arg) => [{ type: "post", id: arg }],
        }),
        addPost: builder.mutation({
            query: (data) => ({
                url: "/posts",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['posts'] //For Refreshing Posts ( Posts.jsx)
        }),
        editPost: builder.mutation({
            query: ({ id, data }) => ({
                url: `/posts/${id}`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: (result, error, arg) => [{ type: "post", id: arg }],
        }),



    }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useAddPostMutation, useEditPostMutation } = apiSlice;