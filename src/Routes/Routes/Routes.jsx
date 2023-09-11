import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";

import Login from "../../Pages/Login/Login";
import Home from "../../Pages/Home/Home";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import BlogDetails from "../../Pages/Blogs/BlogDetails/BlogDetails";
import Contact from "../../Pages/Contact/Contact";
import Blogs from "../../Pages/Blogs/Blogs";
import Shops from "../../Pages/Shops/Shops";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/shops',
                element: <Shops></Shops>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/blog-details',
                element: <BlogDetails></BlogDetails>
            },
            {
                path: '/contact-us',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>

            }
        ]

    }
])