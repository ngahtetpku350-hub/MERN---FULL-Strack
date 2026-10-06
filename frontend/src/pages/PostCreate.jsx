import React, { useState } from "react";
import LinkButton from "../components/LinkButton";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { postCreate } from "../api/services/post";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [viewer, setViewer] = useState();
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  // new post create လုပိ တာ
   const newPost = {
    title,
    author,
    viewer,
    description,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!title || !author || !description) {
      toast.warning("All fields are required!");
      return;
    }

    await postCreate(newPost);
    toast.success("Post create successfully!");
    setTitle("");
    setAuthor("");
    setViewer();
    setDescription("");

    navigate("/post-list");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <LinkButton to={"/post-list"} label={"Go Back"}></LinkButton>
        <h3 className="text-3xl capitalize text-black">Post Create Form</h3>
      </div>
      <form
        onSubmit={handleSubmit}
        className="shadow-sm shadow-black rounded-lg p-8"
      >
        <div className="grid grid-cols-2 gap-2 mb-5">
          {/* Title Start */}
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-lg capitalize text-black">
              title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              className="border border-black border-solid rounded-lg px-4 py-2 text-base"
            />
          </div>
          {/* Title End */}

          {/* Author Start */}
          <div className="flex flex-col gap-2">
            <label htmlFor="author" className="text-lg capitalize text-black">
              author
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter post author"
              className="border border-black border-solid rounded-lg px-4 py-2 text-base"
            />
          </div>
          {/* Author End */}
        </div>

        {/* viewer Start */}
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="viewer" className="text-lg capitalize text-black">
            viewer
          </label>
          <input
            type="number"
            id="viewer"
            value={viewer}
            onChange={(e) => setViewer(e.target.value)}
            placeholder="Enter post viewer"
            className="border border-black border-solid rounded-lg px-4 py-2 text-base"
          />
        </div>
        {/* viewer End */}

        {/* description Start */}
        <div className="flex flex-col gap-2 mb-5">
          <label
            htmlFor="description"
            className="text-lg capitalize text-black"
          >
            description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter post description"
            className="border border-black border-solid rounded-lg px-4 py-2 text-base h-50 resize-none"
          />
        </div>
        {/* description End */}

        <button className="inline-block px-4 cursor-pointer py-2 bg-black text-white text-lg rounded-2xl capitalize border border-solid border-black hover:bg-transparent hover:text-black transition-all duration-300">
          Save
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
