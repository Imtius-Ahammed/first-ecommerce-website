import React from 'react';
import logo from "../../../../Assets/Img/logo-white.png";
import { Link } from 'react-router-dom';
import { BiFilterAlt } from "@react-icons/all-files/bi/BiFilterAlt";
import { MdFavoriteBorder } from "@react-icons/all-files/md/MdFavoriteBorder";
import { HiOutlineShoppingBag } from "@react-icons/all-files/hi/HiOutlineShoppingBag";
import useCart from '../../../../Hooks/useCart';
import useAdmin from '../../../../Hooks/useAdmin';

const Section_02 = () => {

    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    return (
        <div>
            {
                !isAdmin &&
                <div className='flex lg:px-0 px-4 gap-4 border-b-2 mx-auto w-full lg:w-9/12 justify-between items-center py-4 lg:py-8'>
                    <div className='flex items-center lg:gap-0 gap-4'>
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-200 font-semibold rounded-box w-96">
                                <li><Link className='hover:text-orange-500 hover:border-b-2 hover:bg-white border-orange-500'>Home</Link></li>
                                <li><Link to='/shops' className='hover:text-orange-500 hover:border-b-2 hover:bg-white border-orange-500'>Shops</Link></li>
                                <li><Link to='/blogs' className='hover:text-orange-500 hover:border-b-2 hover:bg-white border-orange-500'>Blog</Link></li>
                                <li><Link to='/about-us' className='hover:text-orange-500 hover:border-b-2 hover:bg-white border-orange-500'>About Us</Link></li>
                                <li><Link to='/contact-us' className='hover:text-orange-500 hover:border-b-2 hover:bg-white border-orange-500'>Contact Us</Link></li>
                            </ul>
                        </div>
                        <Link to='/'><img className='lg:w-full w-24' src={logo} alt="" /></Link>
                    </div>
                    <div className='hidden lg:flex items-center'>
                        <input
                            type="text"
                            placeholder="Search Anything..."
                            className="input input-bordered w-full lg:w-96 rounded-none" />
                        <button className='font-bold text-white hover:bg-black bg-[#f2695f] px-8 py-3'>
                            Search
                        </button>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='flex relative'>
                            <p className='absolute bottom-4 left-4 bg-[#f2695f] text-sm h-5 w-5 text-center rounded-full text-white font-semibold'>0</p>
                            <BiFilterAlt className='text-3xl hover:text-orange-500' />
                        </div>
                        <div className='flex relative'>
                            <p className='absolute bottom-4 left-4 bg-[#f2695f] text-sm h-5 w-5 text-center rounded-full text-white font-semibold'>0</p>
                            <MdFavoriteBorder className='text-3xl hover:text-orange-500' />
                        </div>
                        <div className='flex relative'>
                            <p className='absolute bottom-4 left-4 bg-[#f2695f] text-sm h-5 w-5 text-center rounded-full text-white font-semibold'>{cart?.length || 0}</p>
                            <Link to='/dashboard/orders'><HiOutlineShoppingBag className='text-3xl hover:text-orange-500' /></Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Section_02;