import React from 'react';
import { Link } from 'react-router-dom';

const AdSection = () => {
    return (
        <div className='max-w-6xl mx-auto flex justify-around gap-4'>
            <div className='relative w-full lg:w-1/2' >
                <img className='w-full h-96 opacity-30' src="http://surl.li/nxszj" alt="" />
                <div className="absolute top-20 py-3 w-full text-center">
                    <img className='flex w-1/2 mx-auto mb-4 justify-center' src="https://i.ibb.co/BC5skd5/Special-Sale.png" />
                    <h1>ENTER CODE: <span className='bg-red-500 p-1 text-white'>SUM50</span></h1>
                    <h1 className="mt-4 font-semibold text-4xl lg:text-4xl text-red-500">50 % OFF </h1>

                    <Link to='/shops' className="mt-6 px-3 py-2 hover:bg-orange-600 bg-black rounded-lg text-white flex items-center w-1/3 uppercase text-sm font-bold mx-auto justify-center">Shop now</Link>
                </div>
            </div>
            <div className='w-1/2 mx-2 lg:mx-0 hidden lg:flex relative' >
                <img className='w-full h-96' src="http://surl.li/nxspj" alt="" />
                <div className="px-5 my-7 absolute top-20 py-3 w-full ">

                    <h1 className='text-red-600 text-xl font-medium mb-3'>New Season</h1>
                    <h1 className='lg:text-3xl opacity-60 md:text-2xl bg-[#f3f1f1] text-center py-3'>Summer Collection</h1>

                    <Link to='/shops' className="mt-10 px-3 py-2 bg-orange-600 hover:bg-black rounded-lg text-white flex items-center w-1/3 uppercase text-sm font-bold mx-auto justify-center">Shop now</Link>
                </div>
            </div>
        </div>
    );
};

export default AdSection;