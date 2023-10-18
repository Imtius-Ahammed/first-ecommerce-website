import React, { useState } from 'react';
import { FaCodeCompare, FaHeart, FaStar } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import Social from './Social/Social';
import FrequentlyBought from './FrequentlyBought/FrequentlyBought';
import DetailsBtn from './DetailsBtn/DetailsBtn';


const ProductDetails = () => {

    const productDetails = useLoaderData();
    const { category, description, image, sample_img, name, option, tag, price, rating, _id } = productDetails;

    const [btn, setHandleBtn] = useState('Descriptions');
    const [showImage, setShowImage] = useState(null);
    const [hideImage, setHideImage] = useState(false);

    const handleBtn = (componentName) => {
        setHandleBtn(componentName);
    };

    const handleShowImageBtn = (index) => {
        setShowImage(index);
        setHideImage(true)
    }

    return (
        <div className='mx-auto w-full lg:w-9/12 '>
            <div className='flex lg:flex-row flex-col justify-center gap-6'>
                <div className='lg:w-2/4 lg:px-0 px-3  w-full flex flex-col-reverse lg:flex-row gap-2'>
                    <div className='w-full flex lg:flex-col flex-row flex-wrap my-6 lg:w-2/5 '>
                        {
                            sample_img.slice(0,3).map((img, index) => {
                                return <button key={index} onClick={() => handleShowImageBtn(index)}>
                                    <img className='w-32 mx-auto mb-2' src={img} alt="" />
                                </button>
                            })
                        }
                    </div>
                    <div className='flex items-center justify-center w-96 h-96'>
                        {
                            !showImage && !hideImage ?
                                <img className='w-full h-96 mb-2' src={image} alt="" />
                                :
                                <img className='w-full h-96 mb-2' src={sample_img[showImage]} alt="" />
                        }
                    </div>
                </div>
                <div className='w-full  lg:w-2/4 lg:px-0 px-3  '>
                    <h1 className='lg:text-4xl  font-medium'>{name}</h1>
                    <div className='flex items-center mb-4 text-orange-300'>
                        <FaStar></FaStar>
                        {rating}
                        <span className='text-black'>  (1 Customer review)</span>
                    </div>
                    <h1 className='lg:text-4xl font-medium mb-4 '>${price}</h1>
                    <p className='list-disc'>
                        {description}
                    </p>
                    <p className='text-green-500 mt-3 font-medium mb-4'>In Stock</p>
                    <button className='btn btn-neutral mb-8' type="submit">Add To Cart</button>

                    <div className='flex items-center gap-6 mb-10 '>
                        <div className='flex items-center gap-2 text-xl hover:text-red-400'>
                            <FaHeart className=''></FaHeart><h3>Wishlist</h3>

                        </div>
                        <div className='flex items-center gap-2 text-xl hover:text-red-400'>
                            <FaCodeCompare></FaCodeCompare> <h3>Compare</h3>
                        </div>
                    </div>
                    <hr />

                    <div>
                        <h1 className='mt-4 mb-2 font-bold uppercase bg-sky-900 text-white w-36 rounded text-center p-1'>{option} </h1>
                        <h1 className='mb-2'>Categories:   <Link className='text-slate-500'>{category}</Link></h1>
                        <p>Tags: <span className='ml-2 text-slate-500'>{tag}</span></p>
                    </div>
                </div>
            </div>

            <FrequentlyBought productDetails={productDetails} />
            <DetailsBtn btn={btn} handleBtn={handleBtn} />
            <Social />
            <RelatedProducts></RelatedProducts>
        </div>
    );
};

export default ProductDetails;