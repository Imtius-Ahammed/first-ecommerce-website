import { MdArrowDropDown } from '@react-icons/all-files/md/MdArrowDropDown';
import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../../Login/Login';

const Section_01 = () => {
    return (
        <div className='w-full py-2 border-b-2'>
            <div className='flex lg:flex-row flex-col gap-2 mx-auto w-full lg:w-9/12 font-thin items-center justify-between text-slate-500'>
                <div className='hidden lg:flex'>
                    <h1>Welcome to Romi!</h1>
                </div>
                <div className='flex gap-4 items-center divide-x-2'>
                    <div className="dropdown dropdown-hover dropdown-bottom px-3">
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
                    <div className="dropdown dropdown-hover dropdown-bottom px-3">
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
                    <div className='px-3'>
                        <button  onClick={()=>document.getElementById('my_modal_3').showModal()}>Sign In / Register</button>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
   <Login></Login>
  </div>
</dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section_01;