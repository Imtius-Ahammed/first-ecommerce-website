import { MdArrowDropDown } from '@react-icons/all-files/md/MdArrowDropDown';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Section_01 = () => {

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
        <div className='w-full py-2 border-b-2'>
            <div className='flex gap-2 mx-auto w-11/12 lg:w-9/12 font-thin items-center justify-between text-slate-500'>
                <div>
                    <h1>Welcome to Ecom BD!</h1>
                </div>
                <div className='flex gap-4 items-center divide-x-2'>
                    <div className="hidden lg:dropdown dropdown-hover dropdown-bottom px-3">
                        <div className='flex items-center'>
                            <h3 className="hover:text-orange-500 hover:bg-white">Language</h3>
                            <MdArrowDropDown />
                        </div>
                        <ul tabIndex={0} className="dropdown-content mt-1 z-10 menu p-2 w-40 bg-white rounded-xl border-t-2 border-orange-500">
                            <li>
                                <Link className='hover:bg-white hover:text-orange-500 font-medium'>English</Link>
                            </li>
                            <li>
                                <Link className='hover:bg-white hover:text-orange-500 font-medium'>French</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:dropdown dropdown-hover dropdown-bottom px-3">
                        <div className='flex items-center'>
                            <h3 className="hover:text-orange-500 hover:bg-white">Currency</h3>
                            <MdArrowDropDown />
                        </div>
                        <ul tabIndex={0} className="dropdown-content mt-1 z-10 menu p-2 w-40 bg-white rounded-xl border-t-2 border-orange-500">
                            <li>
                                <Link className='hover:bg-white hover:text-orange-500 font-medium'>USD</Link>
                            </li>
                            <li>
                                <Link className='hover:bg-white hover:text-orange-500 font-medium'>EUR</Link>
                            </li>
                        </ul>
                    </div>
                    {
                        user?.email ?
                            <div className='px-3 flex items-center gap-3'>
                                <Link to='/dashboard' className='text-white bg-black px-3 py-1 text-sm rounded hover:bg-[#4e4d4d] font-semibold'>Dashboard</Link>
                                <button
                                    className='px-3 py-1 font-semibold text-sm
                                    hover:bg-[#4e4d4d] bg-black text-white rounded'
                                    onClick={handleLogOut}>
                                    Log Out
                                </button>
                            </div>
                            :
                            <div className="px-3">
                                <Link to='/login'>Sign In / Register</Link>
                            </div>
                    }
                </div>
            </div>
        </div >
    );
};

export default Section_01;