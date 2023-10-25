import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import BlogDetails from "../../Pages/Blogs/BlogDetails/BlogDetails";
import Contact from "../../Pages/Contact/Contact";
import Blogs from "../../Pages/Blogs/Blogs";
import Shops from "../../Pages/Shops/Shops";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import UserDashboardLayout from "../../Layout/UserDashboardLayout";
import UserDashboard from "../../Pages/UserDashboard/UserDashboard";
import Orders from "../../Pages/UserDashboard/Orders/Orders";

export const router = createBrowserRouter([
    {
        path: '/',
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
                path: '/product-details/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
                element: <ProductDetails></ProductDetails>
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
                path: '/dashboard',
                element: <UserDashboardLayout />,
                children: [
                    {
                        path: '/dashboard',
                        element: <UserDashboard />
                    },
                    {
                        path: '/dashboard/orders',
                        element: <Orders />
                    },
                ]
            }
        ]

    }
])