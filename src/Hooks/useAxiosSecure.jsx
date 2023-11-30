import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../Pages/Contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const useAxiosSecure = () => {

    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate();

    const axiosSecure = axios.create({
        baseURL: 'https://first-ecommerce-website-server.vercel.app'
        // http://localhost:5000
    });

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('E-Access-Token')
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config;
        });

        axiosSecure.interceptors.response.use((response) => response, async (error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)){
                await logOut();
                navigate('/login')
            }
            return Promise.reject(error);
        });
    }, [axiosSecure, logOut, navigate]);

    return [axiosSecure]
};

export default useAxiosSecure;