import React, { useEffect, useState } from 'react'
import LinkButton from '../components/LinkButton'
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { postDetail, postUpdate } from '../api/services/post';

const PostUpdate = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [viewer, setViewer] = useState(0);
    const [description, setDescription] = useState("");
    
    const navigate = useNavigate();
    const { id } = useParams();

    const oldData = async () => {
            const response = await postDetail(id);
            
            const postData = response.detailspost;

            setTitle(postData.title);
            setAuthor(postData.author);     
            setViewer(postData.viewer);       
            setDescription(postData.description);
    }

    useEffect(() => {
        oldData();
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault()
            const updatedData = { title, author, viewer, description };
            
            // API Update Call
            await postUpdate(id, updatedData);

            toast.success('Post updated successfully!');
            setTitle("");
            setAuthor("");
            setViewer(0);
            setDescription("");
            navigate('/post-list');
    };

    return (
        <div>
            <div className='flex justify-between items-center mb-10'>
                <LinkButton to={'/post-list'} label={'Go Back'}></LinkButton>
                <h3 className='text-3xl capitalize text-black'>Post Update Form</h3>
            </div>
            <form onSubmit={handleSubmit} className='shadow-sm shadow-black rounded-lg p-8'>

                <div className='grid grid-cols-2 gap-2 mb-5'>
                    {/* Title Start */}
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="title" className='text-lg capitalize text-black'>
                            title
                        </label>
                        <input type="text" id='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter post title' className='border border-black border-solid rounded-lg px-4 py-2 text-base' />
                    </div>
                    {/* Title End */}

                    {/* Author Start */}
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="author" className='text-lg capitalize text-black'>
                            author
                        </label>
                        <input type="text" id='author' value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Enter post author' className='border border-black border-solid rounded-lg px-4 py-2 text-base' />
                    </div>
                    {/* Author End */}
                </div>

                {/* Viewer Start */}
                <div className='flex flex-col gap-2 mb-5'>
                    <label htmlFor="viewer" className='text-lg capitalize text-black'>
                        viewer
                    </label>
                    <input type="number" id='viewer' value={viewer} onChange={(e) => setViewer(e.target.value)} placeholder='Enter post viewer' className='border border-black border-solid rounded-lg px-4 py-2 text-base' />
                </div>
                {/* Viewer End */}

                {/* Description Start */}
                <div className='flex flex-col gap-2 mb-5'>
                    <label htmlFor="description" className='text-lg capitalize text-black'>
                        description
                    </label>
                    <textarea id='description' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Enter post description' className='border border-black border-solid rounded-lg px-4 py-2 text-base h-50 resize-none' />
                </div>
                {/* Description End */}

                <button className='inline-block px-4 cursor-pointer py-2 bg-black text-white text-lg rounded-2xl capitalize border border-solid border-black hover:bg-transparent hover:text-black transition-all duration-300'>Save</button>
            </form>
        </div>
    )
}

export default PostUpdate