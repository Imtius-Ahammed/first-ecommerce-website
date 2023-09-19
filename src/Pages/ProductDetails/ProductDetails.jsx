import React, { useState } from 'react';
import { FaCodeCompare, FaHeart, FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Descriptions from './Descriptions/Descriptions';
import AboutBrands from './AboutBrands/AboutBrands';
import Shipping from './Shipping/Shipping';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import RelatedProducts from './RelatedProducts/RelatedProducts';


const ProductDetails = () => {
    // const [activeButton, setActiveButton] = useState(0);

    // const handleButtonClick = (button) => {
    //     setActiveButton(button);
    // };

    // const buttons = ['For Men', 'For Children','For Woman'];

    // let selectedContent;

    // if (activeButton === 0) {

    //     selectedContent = (
    //         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 px-12 sm:px-0 cursor-pointer'>
    //             <h1>hello</h1>
    //         </div>
    //     );
    // } else if (activeButton === 1) {

    //     selectedContent = (
    //         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 px-12 sm:px-0 cursor-pointer'>
    //           <h2>Ki khbr</h2>
    //         </div>
    //     );
    // }
    
    
    return (
        <div className='mx-auto w-full divide-y-2 lg:w-9/12 '>
            <div className=' flex lg:flex-row flex-col justify-center gap-6'>
            <div className='lg:w-2/4 lg:px-0 px-3  w-full flex gap-2'>
                <div className=' w-full lg:w-2/5'>
                <img className='w-full mb-2' src="/src/Assets/Img/product-09-100x100.jpg" alt="" />
                <img className='w-full  mb-2' src="/src/Assets/Img/product-10-100x100.jpg" alt="" />
                <img className='w-full  mb-2' src="/src/Assets/Img/product-01-100x100.jpg" alt="" />
                <img className='w-full  mb-2' src="/src/Assets/Img/product-02-100x100.jpg" alt="" />
                <img className='w-full  mb-2' src="/src/Assets/Img/product-15-100x100.jpg" alt="" />
                    </div>
                <div>
                    <img className='w-fit  mb-2' src="/src/Assets/Img/product-10.jpg" alt="" />
                </div>

            </div>
            <div className='w-full  lg:w-2/4 lg:px-0 px-3  '>
                <h1 className='lg:text-4xl  font-medium'>Pellentesque posuere</h1>
                <div className='flex items-center mb-4 text-orange-300'>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
              <span className='text-black'>  (1 Customer review)</span>
                </div>
                <h1 className='lg:text-4xl font-medium mb-4'>$52.00</h1>
                <ul className='list-disc ml-10 '>
                    <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</li>
                    <li>Consetetur sadipscing elitr, sed diam nonumy eirmod</li>
                    <li>Suspendisse ultrices mauris diam</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                <p className='text-red-500 font-medium mb-4'>Available on backorder</p>
                <button className='btn btn-neutral mb-8' type="submit">Add To Cart</button>

                <div className='flex items-center gap-6 mb-10'>
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
        <h1 className='lg:text-3xl font-medium mt-4 mb-2 lg:px-0 px-3'>Frequently Bought Together</h1>
        <hr />

        <div className='flex gap-4 my-4 lg:px-0 px-3'>
            <div className='flex gap-2 '>
            <div><img  src="/src/Assets/Img/product-15-100x100.jpg" alt="" /></div>
            <div className='flex items-center'>+</div>
            <div><img  src="/src/Assets/Img/product-10-100x100.jpg" alt="" /></div>
            </div>
           
            <div>
                <div>
                    <h1>Price for all: <span className='text-red-500'>$77.00</span></h1>
                    <button className='btn btn-warning' type="submit">Add All to Cart</button>
                </div>

            </div>
        </div>
        <div>
            <ul className='list-disc lg:ml-4 ml-6'>
                <li>This Product: Pellentesque posuere – $52.00</li>
                <li>Checked Wool Blend Mini Skirt – $29.00 $25.00</li>
            </ul>
        </div>

        <Link to='/descriptions'>Discount page</Link>
        <Descriptions></Descriptions>
        <RatingsReviews></RatingsReviews>
        <AboutBrands></AboutBrands>
        <Shipping></Shipping>
        <RelatedProducts></RelatedProducts>
        

{/* swap */}
     {/* <div>
     <div className="max-w-6xl mx-auto my-20 relative">
            <h1 className='text-center text-4xl font-semibold my-6'>Featured Items</h1>
            <div className='flex items-center justify-evenly mx-auto lg:w-1/3'>
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        className={`text-2xl ${activeButton === index ? 'underline underline-offset-8 text-emerald-400' : 'hover:text-emerald-400'}`}
                        onClick={() => handleButtonClick(index)}
                    >
                        {button}
                    </button>
                ))}
            </div>
            {selectedContent}
        </div>
     </div> */}




        </div>
    );
};

export default ProductDetails;