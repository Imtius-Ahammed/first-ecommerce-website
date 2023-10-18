import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaPinterest, FaTwitter, FaVoicemail } from 'react-icons/fa6';

const Social = () => {
    return (
        <div className='grid lg:grid-cols-4 grid-cols-2 my-8 border-none '>
            <Link className='flex items-center gap-2 lg:text-2xl text-xl border lg:p-5 p-3 hover:text-red-500'><FaFacebook></FaFacebook> Share on Facebook</Link>
            <Link className='flex items-center gap-2 lg:text-2xl text-xl border lg:p-5 p-3 hover:text-red-500'><FaTwitter></FaTwitter> Tweet this Product</Link>
            <Link className='flex items-center gap-2 lg:text-2xl text-xl border lg:p-5 p-3 hover:text-red-500'><FaPinterest></FaPinterest>Pin This Product</Link>
            <Link className='flex items-center gap-2 lg:text-2xl text-xl border lg:p-5 p-3 hover:text-red-500'><FaVoicemail></FaVoicemail> Mail This Product</Link>

        </div>
    );
};

export default Social;