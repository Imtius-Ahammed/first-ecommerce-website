import React, { useState } from 'react';

import { FaFacebook, FaMailchimp, FaPinterest, FaTwitter, FaVoicemail, FaCodeCompare, FaHeart, FaStar } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';
import Descriptions from './Descriptions/Descriptions';
import AboutBrands from './AboutBrands/AboutBrands';
import Shipping from './Shipping/Shipping';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import RelatedProducts from './RelatedProducts/RelatedProducts';


const ProductDetails = () => {

    const productDetails = useLoaderData();
    console.log(productDetails);
    const { category, image, name, option, price, rating, _id} = productDetails;

    const [btn, setHandleBtn] = useState('Descriptions');

    const handleBtn = (componentName) => {
        setHandleBtn(componentName);
    }

    return (
        <div className='mx-auto w-full divide-y-2 lg:w-9/12 '>
            <div className=' flex lg:flex-row flex-col justify-center gap-6 '>
                <div className='lg:w-2/4 lg:px-0 px-3  w-full flex gap-2'>
                    <div className=' w-full lg:w-2/5 '>
                        <img className='w-full mb-2' src="/src/Assets/Img/product-09-100x100.jpg" alt="" />
                        <img className='w-full  mb-2' src="/src/Assets/Img/product-10-100x100.jpg" alt="" />
                        <img className='w-full  mb-2' src="/src/Assets/Img/product-01-100x100.jpg" alt="" />
                        <img className='w-full  mb-2' src="/src/Assets/Img/product-02-100x100.jpg" alt="" />
                        <img className='w-full  mb-2' src="/src/Assets/Img/product-15-100x100.jpg" alt="" />
                    </div>
                    <div>
                        <img className='w-fit  mb-2' src={image} alt="" />
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
                    <ul className='list-disc ml-10 '>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</li>
                        <li>Consetetur sadipscing elitr, sed diam nonumy eirmod</li>
                        <li>Suspendisse ultrices mauris diam</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                    <p className='text-red-500 font-medium mb-4'>Available on backorder</p>
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
                        <h1 className='mt-4 mb-2'>SKU: <span className='ml-2 text-slate-500'> WVN-13</span> </h1>
                        <h1 className='mb-2'>Categories:   <Link className='ml-2 text-slate-500'>Accessories</Link>, <Link className='text-slate-500'>Backpack</Link></h1>
                        <p>Tags: <span className='ml-2 text-slate-500'>Tag-02,Tag-08</span></p>
                    </div>

                </div>
            </div>

            {/* Frequently Bought Together */}
            <h1 className='lg:text-3xl font-medium border-none mt-8 mb-2 lg:px-0 px-3'>Frequently Bought Together</h1>
            <hr />

            <div className='flex gap-4 my-8 border-none lg:px-0 px-3 '>
                <div className='flex gap-2 '>
                    <div><img className='w-28' src="/src/Assets/Img/product-15-100x100.jpg" alt="" /></div>
                    <div className='flex items-center'>+</div>
                    <div><img className='w-28' src="/src/Assets/Img/product-10-100x100.jpg" alt="" /></div>
                </div>

                <div >
                    <div>
                        <h1>Price for all: <span className='text-red-500'>$77.00</span></h1>
                        <button className='btn btn-warning' type="submit">Add All to Cart</button>
                    </div>
                </div>
            </div>
            <div className='border-none'>
                <ul className='list-disc lg:ml-4 ml-6 '>
                    <li>This Product: {name} – ${price}</li>
                    <li>Checked Wool Blend Mini Skirt – $29.00 $25.00</li>
                </ul>
            </div>

            <div className='border-none'>
                <div className="text-xl breadcrumbs  flex items-center justify-center my-6">
                    <ul>
                        <li>
                            <button className='hover:font-bold hover:underline' onClick={() => handleBtn('Descriptions')}>
                                <Link>Description</Link>
                            </button>
                        </li>
                        <li>
                            <button className='hover:font-bold hover:underline' onClick={() => handleBtn('RatingsReviews')}>
                                <Link>Reviews</Link>
                            </button>
                        </li>
                        <li>
                            <button className='hover:font-bold hover:underline' onClick={() => handleBtn('AboutBrands')}>
                                <Link>About Brands</Link>
                            </button>
                        </li>
                        <li>
                            <button className='hover:font-bold hover:underline' onClick={() => handleBtn('Shipping')}>
                                <Link>Shipping & Delivery</Link>
                            </button>
                        </li>

                    </ul>
                </div>

                <div>
                    {btn === 'Descriptions' && <Descriptions />}
                    {btn === 'RatingsReviews' && <RatingsReviews />}
                    {btn === 'AboutBrands' && <AboutBrands />}
                    {btn === 'Shipping' && <Shipping />}
                    {btn === 'RelatedProducts' && <RelatedProducts />}
                </div>

            </div>
            <div className='grid lg:grid-cols-4 grid-cols-2 my-8 border-none '>
                <Link className='flex items-center gap-2 lg:text-2xl text-xl border lg:p-5 p-3 hover:text-red-500'><FaFacebook></FaFacebook> Share on Facebook</Link>
                <Link className='flex items-center gap-2 lg:text-2xl text-xl border lg:p-5 p-3 hover:text-red-500'><FaTwitter></FaTwitter> Tweet this Product</Link>
                <Link className='flex items-center gap-2 lg:text-2xl text-xl border lg:p-5 p-3 hover:text-red-500'><FaPinterest></FaPinterest>Pin This Product</Link>
                <Link className='flex items-center gap-2 lg:text-2xl text-xl border lg:p-5 p-3 hover:text-red-500'><FaVoicemail></FaVoicemail> Mail This Product</Link>

            </div>
            <RelatedProducts></RelatedProducts>
        </div>
    );
};

export default ProductDetails;