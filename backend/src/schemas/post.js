import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        default: ""
    },
    viewer: {
        type: Number,      
        required: false,
        default: 1
    },
    description: {
        type: String,
    }
}, { timestamps: true }); 

const Post = mongoose.model("Post", postSchema);
export default Post 