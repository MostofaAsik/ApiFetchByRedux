import React, { useState } from 'react';

const AddPost = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <div className="p-10 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <form
                className="flex flex-col gap-6 w-full"
                onSubmit={handleSubmit}
            >
                <input
                    className="border border-gray-300 px-4 py-2 rounded w-full"
                    type="text"
                    placeholder="Enter post title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Enter post content"
                    className="border border-gray-300 px-4 py-2 rounded w-full"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <button
                    type="submit"
                    className="bg-indigo-500 text-white px-4 py-2 rounded w-full"
                // disabled={isLoading}
                >
                    Save Post
                </button>
            </form>

            {/* {isSuccess && (
                <h1 className="text-green-600">
                    Post added successfully and title was {post?.title}
                </h1>
            )} */}

            {/* {isError && (
                <h1 className="text-red-600">An unknown error occured!</h1>
            )} */}
        </div>
    );
};

export default AddPost;