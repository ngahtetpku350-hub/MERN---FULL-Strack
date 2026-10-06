import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { postDelete } from '../api/services/post' 

const PostDelete = ({ handleSubmit }) => {
  const { id } = useParams()
  const navigate = useNavigate()

  const handleDelete = async () => {
      await postDelete(id)

      toast.success('Post deleted successfully!')

      if (handleSubmit) {
        handleSubmit()
      }
      navigate('/post-list')
  }

  const handleCancel = () => {
    navigate(-1)
  }

  return (
    <div className="max-w-md mx-auto mt-20 items-center">
      <div className="shadow-sm shadow-black rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-black mb-4">
          Delete Post
        </h3>

        <p className="text-lg text-gray-600 mb-8">
          Are you sure you want to delete this post?
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleCancel}
            className="px-5 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostDelete