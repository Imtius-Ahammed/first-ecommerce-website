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
import MyCart from "../../Pages/Dashboard/UserDashboard/MyCart/MyCart";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import AccountDetails from "../../Pages/Dashboard/UserDashboard/AccountDetails/AccountDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import AllUsers from "../../Pages/Dashboard/AdminDashboard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddProducts from "../../Pages/Dashboard/AdminDashboard/AllProducts/AddProducts/AddProducts";
import AllProducts from "../../Pages/Dashboard/AdminDashboard/AllProducts/AllProducts";
import UpdateProducts from "../../Pages/Dashboard/AdminDashboard/AllProducts/UpdateProducts/UpdateProducts";
import Checkout from "../../Pages/Dashboard/UserDashboard/MyCart/Checkout/Checkout";
import PaymentSuccess from "../../Pages/Dashboard/UserDashboard/MyCart/Checkout/PaymentSuccess";
import PaymentFailed from "../../Pages/Dashboard/UserDashboard/MyCart/Checkout/PaymentFailed";
import Orders from "../../Pages/Dashboard/UserDashboard/Orders/Orders";
import AllPayments from "../../Pages/Dashboard/AdminDashboard/AllPayments/AllPayments";

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
                    // ----- User Routes Starts ----- //
                    {
                        path: '/dashboard/my-cart',
                        element: <PrivateRoute>
                            <MyCart />
                        </PrivateRoute>
                    },
                    {
                        path: '/dashboard/orders',
                        element: <PrivateRoute>
                            <Orders />
                        </PrivateRoute>
                    },
                    {
                        path: '/dashboard/checkout',
                        element: <PrivateRoute>
                            <Checkout />
                        </PrivateRoute>
                    },
                    {
                        path: "/dashboard/payment/success",
                        element: <PrivateRoute><PaymentSuccess /></PrivateRoute>
                    },
                    {
                        path: "/dashboard/payment/fail",
                        element: <PrivateRoute><PaymentFailed /></PrivateRoute>
                    },
                    {
                        path: "/dashboard/payment/cancel",
                        element: <PrivateRoute><PaymentFailed /></PrivateRoute>
                    },
                    {
                        path: '/dashboard/accountDetails',
                        element: <PrivateRoute>
                            <AccountDetails />
                        </PrivateRoute>
                    },
                    // ----- User Routes Ends ----- //

                    // ----- Admin Routes Starts ----- //
                    {
                        path: '/dashboard/users',
                        element: <PrivateRoute>
                            <AdminRoute>
                                <AllUsers />
                            </AdminRoute>
                        </PrivateRoute>
                    },
                    {
                        path: '/dashboard/add-products',
                        element: <PrivateRoute>
                            <AdminRoute>
                                <AddProducts />
                            </AdminRoute>
                        </PrivateRoute>
                    },
                    {
                        path: '/dashboard/update-product/:id',
                        element: <PrivateRoute>
                            <AdminRoute>
                                <UpdateProducts />
                            </AdminRoute>
                        </PrivateRoute>
                    },
                    {
                        path: '/dashboard/all-products',
                        element: <PrivateRoute>
                            <AdminRoute>
                                <AllProducts />
                            </AdminRoute>
                        </PrivateRoute>
                    },
                    {
                        path: '/dashboard/all-payments',
                        element: <PrivateRoute>
                            <AdminRoute>
                                <AllPayments />
                            </AdminRoute>
                        </PrivateRoute>
                    },
                    // ----- Admin Routes Ends ----- //
                ]
            }
        ]

    }
])