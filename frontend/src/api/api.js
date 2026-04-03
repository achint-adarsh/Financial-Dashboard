import axios from 'axios';

const API = axios.create({
    baseURL: "https://financial-dashboard-9s00.onrender.com/api",
});

API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if(token) {
        req.headers.Authorization = `Bearer ${token}`
    }
    return req;
});

export default API;