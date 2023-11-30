import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { RiDashboard3Line } from '@react-icons/all-files/ri/RiDashboard3Line';
import { FiShoppingCart } from '@react-icons/all-files/fi/FiShoppingCart';
import { MdAccountCircle } from '@react-icons/all-files/md/MdAccountCircle';
import './UseNavbar.css';

const UserNavbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(e => {
                console.log(e);
            })
    };

    return (
        <div className='bg-slate-50 py-10'>
            <div className="hero min-h-full">
                <div className="hero-content flex-col items-center lg:flex-row mb-6">
                    <img src={user?.photoURL} className="w-20 rounded-full shadow-2xl" />
                    <div>
                        <h1 className="text-xl font-bold">{user?.displayName}</h1>
                        <button
                            className='py-1 mt-2 font-semibold text-sm rounded'
                            onClick={handleLogOut}>
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
            <li className='border-y-2 border-slate-30 p-2 w-full font-semibold'>
                <NavLink  className={({ isActive }) => (isActive ? "active-link flex items-center justify-between focus:bg-none  hover:text-orange-600" : " flex items-center justify-between hover:bg-white hover:text-orange-600")}
                   
                    to='/dashboard/dashboard'>
                    Dashboard
                    <RiDashboard3Line className='text-xl text-orange-300 font-bold' />
                </NavLink>
            </li>
            <li className='border-y-2 border-slate-30 p-2 w-full font-semibold'>
                <NavLink
                    className={({ isActive }) => (isActive ? "active-link flex items-center justify-between focus:bg-none  hover:text-orange-600" : " flex items-center justify-between hover:bg-white hover:text-orange-600")}
                    to='/dashboard/my-cart'>
                    My Cart
                    <FiShoppingCart className='text-xl text-orange-300 font-bold' />
                </NavLink>
            </li>
            <li className='border-y-2 border-slate-30 p-2 w-full font-semibold'>
                <NavLink
                    className={({ isActive }) => (isActive ? "active-link flex items-center justify-between focus:bg-none  hover:text-orange-600" : " flex items-center justify-between hover:bg-white hover:text-orange-600")}
                    to='/dashboard/orders'>
                    Orders
                    <FiShoppingCart className='text-xl text-orange-300 font-bold' />
                </NavLink>
            </li>
            <li className='border-y-2 border-slate-30 p-2 w-full font-semibold'>
                <NavLink
                   className={({ isActive }) => (isActive ? "active-link flex items-center justify-between focus:bg-none  hover:text-orange-600" : " flex items-center justify-between hover:bg-white hover:text-orange-600")}
                    to='/dashboard/accountDetails'>
                    Account Details
                    <MdAccountCircle className='text-xl text-orange-300 font-bold' />
                </NavLink>
               
            </li>
        </div>
    );
};

export default UserNavbar;