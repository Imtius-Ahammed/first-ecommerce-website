import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";

import Login from "../../Pages/Login/Login";
import Home from "../../Pages/Home/Home";
import AboutUs from "../../Pages/AboutUs/AboutUs";

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
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/login',
                element: <Login></Login>

            }
        ]

    }
])