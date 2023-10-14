import React from 'react';
import { FaCartPlus, FaStar, FaRegStar } from 'react-icons/fa';
import { BiLinkExternal, BiHeart } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ProductCard = ({ option }) => {

    const { _id, image, rating, name, price } = option;

    return (
        <div key={_id} className={`py-2 hover:scale-105 duration-500 relative`}>
            <div className=' bg-slate-200 h-4/5'>
                <img src={image} alt="" className='px-4 py-10' />
            </div>
            <div className='pt-2 px-1'>
                <p className='flex items-center gap-1 text-yellow-500 my-2'>
                    <FaStar />{rating}
                </p>
                <p className='text-gray-500 font-medium'>{name}</p>
                <div className='flex items-center justify-between'>
                    <p className='font-bold'>${price}</p>
                    <button
                        className="text-2xl font-semibold hover:text-emerald-400 mb-3">
                        <FaCartPlus size={22} className='' />
                    </button>
                </div>
            </div>
            <div className='absolute top-6 right-0 pr-4'>
                <Link to={`/product-details/${_id}`}>
                    <button
                        className="bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center text-2xl font-semibold hover:bg-emerald-400 hover:text-white mb-3"
                    >
                        <BiLinkExternal size={19} />
                    </button></Link>
                <button
                    className="bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center text-2xl font-semibold hover:bg-emerald-400 hover:text-white mb-3"
                >
                    <BiHeart size={19} />
                </button>
            </div>
        </div>
    );
};

export default ProductCard;