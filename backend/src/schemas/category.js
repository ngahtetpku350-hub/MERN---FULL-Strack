import mongoose from "mongoose";


const postCategory = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    }
},{timeseries:true})

const Category = mongoose.model("Category", postCategory);

export default Category;