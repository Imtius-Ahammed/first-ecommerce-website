import React, { useState } from 'react';
import { FaCartPlus, FaStar, FaRegStar } from 'react-icons/fa';
import { BiLinkExternal, BiHeart } from 'react-icons/bi';

const ProductCard = ({ product }) => {
    console.log(product);
    const [showTooltip, setShowTooltip] = useState(false);
    const [showTooltip2, setShowTooltip2] = useState(false);
    const [showWishlist, setShowWishlist] = useState(false);


    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    const handleMouseEnter2 = () => {
        setShowTooltip2(true);
    };

    const handleMouseLeave2 = () => {
        setShowTooltip2(false);
    };

    const handleCardMouseEnter = () => {
        setShowWishlist(true);
    };

    const handleCardMouseLeave = () => {
        setShowWishlist(false);
    };



    const { img, rating, name, price } = product;

    let content;

    if (rating === 0) {
        content = <p className='flex items-center gap-1 text-yellow-500'>
            <FaRegStar size={12} />
            <FaRegStar size={12} />
            <FaRegStar size={12} />
            <FaRegStar size={12} />
            <FaRegStar size={12} />
        </p>
    }
    if (rating === 1) {
        content = <p className='flex items-center gap-1 text-yellow-500'>
            <FaStar size={12} />
            <FaRegStar size={12} />
            <FaRegStar size={12} />
            <FaRegStar size={12} />
            <FaRegStar size={12} />
        </p>
    }
    if (rating === 2) {
        content = <p className='flex items-center gap-1 text-yellow-500'>
            <FaStar size={12} />
            <FaStar size={12} />
            <FaRegStar size={12} />
            <FaRegStar size={12} />
            <FaRegStar size={12} />
        </p>
    }
    if (rating === 3) {
        content = <p className='flex items-center gap-1 text-yellow-500'>
            <FaStar size={12} />
            <FaStar size={12} />
            <FaStar size={12} />
            <FaRegStar size={12} />
            <FaRegStar size={12} />
        </p>
    }
    if (rating === 4) {
        content = <p className='flex items-center gap-1 text-yellow-500'>
            <FaStar size={12} />
            <FaStar size={12} />
            <FaStar size={12} />
            <FaStar size={12} />
            <FaRegStar size={12} />
        </p>
    }
    if (rating === 5) {
        content = <p className='flex items-center gap-1 text-yellow-500'>
            <FaStar size={12} />
            <FaStar size={12} />
            <FaStar size={12} />
            <FaStar size={12} />
            <FaStar size={12} />
        </p>
    }
    return (
        <div className={`py-2 hover:scale-105 duration-500 relative`}
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}>
            <div className=' bg-slate-200 h-4/5'>
                <img src={img} alt="" className='px-4 py-10' />
            </div>
            <div className='pt-2 px-1'>
                {content}
                <p className='text-gray-500 font-medium'>{name}</p>
                <div className='flex items-center justify-between'>
                    <p className='font-bold'>{price}</p>
                    <button
                        className="text-2xl font-semibold hover:text-emerald-400 mb-3">
                        <FaCartPlus size={22} className='' />
                    </button>
                </div>
            </div>
            <div className='absolute top-6 right-0 pr-4'>

                <button
                    className="bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center text-2xl font-semibold hover:bg-emerald-400 hover:text-white mb-3"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <BiLinkExternal size={19} />
                </button>
            </div>
            {showTooltip && (
                <div className="absolute top-7 right-14 bg-emerald-400 text-white px-2 py-1 text-sm font-medium">
                    Quick View
                </div>
            )}
            {showWishlist &&
                <div className={`transition-transform ease-in-out duration-500 absolute top-16 right-0 pr-4 mt-2`}
                >

                    <button
                        className="bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center text-2xl font-semibold hover:bg-emerald-400 hover:text-white mb-3"
                        onMouseEnter={handleMouseEnter2}
                        onMouseLeave={handleMouseLeave2}
                    >
                        <BiHeart size={19} />
                    </button>
                </div>}
            {showTooltip2 && (
                <div className="absolute top-16 mt-3 right-14 bg-emerald-400 text-white px-2 py-1 text-sm font-medium">
                    Wishlist
                </div>
            )}
            <div className='absolute top-7 left-0 pl-4'>

                {
                    rating === 3 && (
                        <p className='bg-red-500 text-sm px-1 text-white'>SALE!</p>
                    )
                }
            </div>
        </div>
    );
};

export default ProductCard;