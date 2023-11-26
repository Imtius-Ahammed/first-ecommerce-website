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
import Orders from "../../Pages/Dashboard/UserDashboard/Orders/Orders";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import AccountDetails from "../../Pages/Dashboard/UserDashboard/AccountDetails/AccountDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import AllUsers from "../../Pages/Dashboard/AdminDashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,

        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shops',
                element: <Shops />
            },
            {
                path: '/product-details/:id',
                element: <PrivateRoute>
                    <ProductDetails />
                </PrivateRoute>
            },
            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/blog-details',
                element: <BlogDetails />
            },
            {
                path: '/contact-us',
                element: <Contact />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            // ----- User Dashboard Routes Starts ----- //
            {
                path: '/dashboard',
                element: <PrivateRoute>
                    <UserDashboardLayout />
                </PrivateRoute>,
                children: [
                    {
                        path: '/dashboard',
                        element: <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    },

                    {
                        path: '/dashboard/dashboard',
                        element: <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>

                    },
                    {
                        path: '/dashboard/orders',
                        element: <PrivateRoute>
                            <Orders />
                        </PrivateRoute>
                    },
                    {
                        path: '/dashboard/users',
                        element: <PrivateRoute>
                            <AllUsers />
                        </PrivateRoute>
                    },
                    {
                        path: '/dashboard/accountDetails',
                        element: <PrivateRoute>
                            <AccountDetails />
                        </PrivateRoute>
                    },
                ]
            }
            // ----- User Dashboard Routes Ends ----- //
        ]

    }
])