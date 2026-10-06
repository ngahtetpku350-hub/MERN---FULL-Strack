// about axios connections 
import axios from "axios";
import host from "./host";

const api = axios.create({
    baseURL : `${host}/api/post`,

    headers: {
        "Content-Type":"application/json",
    },
});

export default api;


