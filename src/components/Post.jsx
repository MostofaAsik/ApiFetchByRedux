import React from 'react';
import { useGetPostByIdQuery } from '../features/api/apiSlice';

const Post = ({ id }) => {

    const { data: post, isLoading, error } = useGetPostByIdQuery(id)



    return (
        <div className='bg-orange-600 text-white px-4 py-5'>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error occurred: {error.message}</p>}

            <br />
            <br />
            <h1>{post?.title}</h1>
            <br />
            <br />
            <p>{post?.body}</p>
            <br />
            <p><strong>Post ID:</strong> {post?.id}</p>
        </div>
    );
};

export default Post;