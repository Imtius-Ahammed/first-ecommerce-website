import React from 'react';
import { FaStar } from 'react-icons/fa6';

const ProductDetails = () => {
    return (
        <div className='mx-auto w-full divide-y-2 lg:w-9/12  flex lg:flex-row flex-col justify-center gap-6'>
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
                <h1 className='text-2xl '>Pellentesque posuere</h1>
                <div className='flex items-center mb-4 text-orange-300'>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
              <span className='text-black'>  (1 Customer review)</span>
                </div>
                <h1 className='text-2xl mb-4'>$52.00</h1>
                <ul className='list-disc ml-10 '>
                    <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</li>
                    <li>Consetetur sadipscing elitr, sed diam nonumy eirmod</li>
                    <li>Suspendisse ultrices mauris diam</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                <p className='text-red-500 font-medium mb-4'>Available on backorder</p>
                <button className='btn btn-neutral' type="submit">Add To Cart</button>

            </div>
        </div>
    );
};

export default ProductDetails;