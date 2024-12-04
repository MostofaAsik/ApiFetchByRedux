import React, { useState } from 'react';
import { useGetPostsQuery } from '../features/api/apiSlice';
import Post from './Post';

const Posts = () => {
    const [currentId, setCurrentId] = useState('')
    const { data: posts, isLoading, error } = useGetPostsQuery()

    console.log(posts);

    return (
        <div className="p-10 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">

            {isLoading && <p>Loading...</p>}
            {error && <p>Error occurred: {error.message}</p>}
            {posts?.length === 0 && <p>No Post Found</p>}
            {
                posts?.map(post =>
                    <li
                        onClick={() => setCurrentId(post.id)}
                        key={post.id}>{post.title}</li>)
            }
            {currentId && <Post id={currentId}></Post>}



        </div>
    );
};

export default Posts;