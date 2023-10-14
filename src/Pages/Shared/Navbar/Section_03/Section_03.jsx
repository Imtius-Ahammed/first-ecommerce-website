import React from 'react';
import { Link } from 'react-router-dom';
import { BiSupport } from '@react-icons/all-files/bi/BiSupport';
import { MdArrowDropDown } from '@react-icons/all-files/md/MdArrowDropDown';

const Section_03 = () => {
    return (
        <div className='py-2 mx-auto w-full lg:w-9/12'>
            <div className="navbar w-full lg:flex hidden">
                <div className="navbar-start lg:w-3/4 w-full">
                    <ul className="menu h-12 menu-horizontal lg:flex gap-6 items-center hidden">
                        <div>
                            <Link className="hover:text-orange-500 hover:border-b-2 hover:bg-white border-orange-500 font-medium text-md">Home</Link>
                        </div>
                        {/* <div className="dropdown dropdown-hover dropdown-bottom">
                            <div className='flex items-center'>
                                <h3 className="hover:text-orange-500 hover:border-b-2 hover:bg-white border-orange-500 font-medium text-md">Shop</h3>
                                <MdArrowDropDown className='text-3xl' />
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-10 menu p-2 w-64 bg-white rounded-xl border-t-4 border-orange-500">
                                <li>
                                    <Link className='hover:bg-white hover:text-orange-500 font-medium'>Item 1</Link>
                                </li>
                                <li>
                                    <Link className='hover:bg-white hover:text-orange-500 font-medium'>Item 2</Link>
                                </li>
                            </ul>
                        </div> */}
                        <div>
                            <Link to='/shops' className="hover:text-orange-500 hover:border-b-2 hover:bg-white border-orange-500 font-medium text-md">Shops</Link>
                        </div>
                        <div>
                            <Link to='/blogs' className="hover:text-orange-500 hover:border-b-2 hover:bg-white border-orange-500 font-medium text-md">Blogs</Link>
                        </div>
                        <div>
                            <Link to="/about-us" className="hover:text-orange-500 hover:border-b-2 hover:bg-white border-orange-500 font-medium text-md">About Us</Link>
                        </div>
                        <div>
                            <Link to='/contact-us' className="hover:text-orange-500 hover:border-b-2 hover:bg-white border-orange-500 font-medium text-md">Contact Us</Link>
                        </div>
                    </ul>
                </div>
                <div className="navbar-end w-full lg:w-1/4 lg:flex hidden gap-4 items-center">
                    <div>
                        <BiSupport className='text-3xl text-orange-600' />
                    </div>
                    <div>
                        <h3 className='font-light text-slate-500'>Support</h3>
                        <p className='font-semibold'>+8801XXXXXXXXX</p>
                    </div>
                </div>
            </div>
            <div className='lg:hidden flex items-center bg-[#3f3f3f] p-4'>
                <input
                    type="text"
                    placeholder="Search Anything..."
                    className="input input-bordered w-full lg:w-96 rounded-none" />
                <button className='font-bold text-white hover:bg-black bg-[#f2695f] px-8 py-3'>
                    Search
                </button>
            </div>
        </div>
    );
};

export default Section_03;