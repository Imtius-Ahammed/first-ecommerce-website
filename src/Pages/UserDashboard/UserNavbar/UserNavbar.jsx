import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { RiDashboard3Line } from '@react-icons/all-files/ri/RiDashboard3Line';
import { FiShoppingCart } from '@react-icons/all-files/fi/FiShoppingCart';
import { MdAccountCircle } from '@react-icons/all-files/md/MdAccountCircle';
import { BsCardChecklist } from '@react-icons/all-files/bs/BsCardChecklist';

const UserNavbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => {
                console.log(e);
            })
    };

    return (
        <div className='bg-slate-50 py-10'>
            <div className="hero min-h-full">
                <div className="hero-content flex-col lg:flex-row mb-6">
                    <img src={user?.photoURL} className="max-w-xs rounded-full shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">{user?.displayName}</h1>
                        <button
                            className='py-1 mt-2 font-semibold text-sm rounded'
                            onClick={handleLogOut}>
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
            <li className='border-y-2 border-slate-30 p-2 w-full font-semibold'>
                <Link
                    className='flex items-center justify-between hover:bg-white hover:text-orange-600'
                    to='/dashboard'>
                    Dashboard
                    <RiDashboard3Line className='text-xl text-orange-300 font-bold' />
                </Link>
            </li>
            <li className='border-y-2 border-slate-30 p-2 w-full font-semibold'>
                <Link
                    className='flex items-center justify-between hover:bg-white hover:text-orange-600'
                    to='/dashboard/orders'>
                    Orders
                    <FiShoppingCart className='text-xl text-orange-300 font-bold' />
                </Link>
            </li>
            <li className='border-y-2 border-slate-30 p-2 w-full font-semibold'>
                <Link
                    className='flex items-center justify-between hover:bg-white hover:text-orange-600'
                    to='/dashboard'>
                    Account Details
                    <MdAccountCircle className='text-xl text-orange-300 font-bold' />
                </Link>
            </li>
            <li className='border-y-2 border-slate-30 p-2 w-full font-semibold'>
                <Link
                    className='flex items-center justify-between hover:bg-white hover:text-orange-600'
                    to='/dashboard'>
                    Wishlist
                    <BsCardChecklist className='text-xl text-orange-300 font-bold' />
                </Link>
            </li>
        </div>
    );
};

export default UserNavbar;