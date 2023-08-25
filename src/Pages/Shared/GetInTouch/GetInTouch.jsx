import React from 'react';
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";

const GetInTouch = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between w-full lg:w-9/12 mx-auto p-0 px-4 py-10 lg:p-20 bg-[#e8f7ff]'>
            <div>
                <div className='flex items-center gap-2'>
                    <AiOutlineArrowRight className='text-3xl font-bold' />
                    <h1 className='text-3xl font-medium'>Get In Touch</h1>
                </div>
                <p className='mt-3 text-gray-600'>Subscrible for lastest Strories and promotion.</p>
            </div>
            <div className='flex items-center'>
                <input
                    type="text"
                    placeholder="Enter Your Email..."
                    className="input input-bordered w-full lg:w-80 rounded-none" />
                <button className='font-bold text-white bg-black hover:bg-[#f2695f] px-8 py-3'>
                    Subscrible
                </button>
            </div>
        </div>
    );
};

export default GetInTouch;