import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true  
    },
    password :{
        type: String,
        required: true
    }
},{
    timeseries:true
});

const User = mongoose.model("User",userModel)
export default User;
