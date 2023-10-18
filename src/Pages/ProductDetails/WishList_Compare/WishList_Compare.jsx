import React from 'react';
import { FaCodeCompare, FaHeart } from 'react-icons/fa6';

const WishList_Compare = () => {
    return (
        <div className='flex items-center gap-6 mb-10 '>
            <div className='flex items-center gap-2 text-xl hover:text-red-400'>
                <FaHeart className=''></FaHeart><h3>Wishlist</h3>

            </div>
            <div className='flex items-center gap-2 text-xl hover:text-red-400'>
                <FaCodeCompare></FaCodeCompare> <h3>Compare</h3>
            </div>
        </div>
    );
};

export default WishList_Compare;