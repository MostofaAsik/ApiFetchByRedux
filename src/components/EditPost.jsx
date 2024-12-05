import React, { useEffect, useState } from 'react';
import { useEditPostMutation } from '../features/api/apiSlice';

const EditPost = ({ post }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [editPost, { data, isError, isSuccess }] = useEditPostMutation()

    useEffect(() => {
        setTitle(post?.title || '');
        setContent(post?.body || '');
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault()
        editPost({
            id: post?.id,
            data: {
                userId: post?.userId,
                title,
                body: content,
            }
        })
        setTitle('')
        setContent('')

    }
    return (
        <div className="p-10 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <form
                className="flex flex-col gap-6 w-full"
                onSubmit={handleSubmit}
            >
                <input
                    className="border border-gray-300 px-4 py-2 rounded w-full text-black"
                    type="text"
                    placeholder="Enter post title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Enter post content"
                    className="border border-gray-300 px-4 py-2 rounded w-full text-black"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <button
                    type="submit"
                    className="bg-indigo-500 text-white px-4 py-2 rounded w-full"
                // disabled={isLoading}
                >
                    Edit Post
                </button>
            </form>


            {isSuccess && (
                <h1 className="text-green-600">
                    Post edited successfully and title was {data?.title}
                </h1>
            )}

            {isError && (
                <h1 className="text-red-600">An unknown error occured!</h1>
            )}
        </div>
    );
};

export default EditPost;