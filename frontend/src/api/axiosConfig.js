import axios from "axios";

const instance = axios.create({
    baseURL : "https://mini-auth.onrender.com/api/auth/"
})

export default instance