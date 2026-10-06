import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LinkButton from '../components/LinkButton'
import { postList } from '../api/services/post';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await postList();
                console.log("API Response:", response);
                
                setPosts(response.postlist || []);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            }
        };

        fetchPosts();
    }, []);
    return (
        <div>
            <div className='flex justify-between items-center mb-10'>
                <LinkButton to={'/post-create'} label={'+ add new post'}></LinkButton>
                <h3 className='text-3xl capitalize text-black'>Post List Form</h3>
            </div>

            <div className='grid grid-cols-3 gap-4'>
                {/* card start */}
                {posts.map((post, index) => {
          const postId = post._id || post.id || index;
          return (
            <div
              key={postId}
              className="shadow-xs shadow-black p-6 rounded-2xl"
            >
              <h3 className="text-black mb-3 text-2xl">{post.title}</h3>
              <p className="text-black mb-2 text-base">
                Author : {post.author}
              </p>
              <p className="text-black mb-2 text-base">
                Viewer :{" "}
                <span className="bg-green-600 text-white px-2 py-1 rounded-2xl text-sm">
                  {post.viewer}
                </span>
              </p>
              <p className="text-black mb-2 text-base">
                Description {post.description}
              </p>
              <Link
                to={`/post-update/${postId}`}
                className="inline-block bg-green-600 px-4 py-2 rounded-2xl text-white border border-solid border-green-600 hover:bg-transparent hover:text-green-600 transition-all duration-300"
              >
                update
              </Link>
              <Link
                to={`/post-delete/${postId}`}
                className="inline-block bg-red-600 px-4 py-2 rounded-2xl text-white border border-solid border-red-600 hover:bg-transparent hover:text-red-600 transition-all duration-300 ms-2"
              >
                delete
              </Link>
            </div>
          );
        })}
                {/* card end */}
            </div>
        </div>
    )
}

export default PostList