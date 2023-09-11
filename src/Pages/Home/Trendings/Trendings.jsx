import React from 'react';

const Trendings = () => {
    return (
        <div className='max-w-6xl mx-auto  my-20'>
            <div className='text-center lg:m-0 mx-4'>
                <h1 className='text-4xl font-bold '>Trendings Categories</h1>
                <p>Find a bright ideal to suit your taste with our great selection of suspension.</p>
            </div>

            <div className='grid lg:grid-cols-5 md:grid-cols-5 grid-cols-3 gap-4 my-12 place-items-center lg:mx-0 mx-4'>
                <div >
                    <img className=' rounded-full' src="/src/Assets/Img/category-1.jpg" alt="" />
                    <div className='text-center p-5'>
                <h1 className='lg:text-2xl md:text-2xl font-medium hover:underline hover:text-red-500 '>Tops & T-Shirt</h1>
                <p>(5)Products</p>
            </div>

                </div>
                <div >
                    <img className=' rounded-full' src="/src/Assets/Img/category-2.jpg" alt="" />
                    <div className='text-center p-5'>
                <h1 className='lg:text-2xl md:text-2xl font-medium hover:underline hover:text-red-500 '>Dresses</h1>
                <p>(4)Products</p>
            </div>

                </div>
                <div >
                    <img className=' rounded-full' src="/src/Assets/Img/category-3.jpg" alt="" />
                    <div className='text-center p-5'>
                <h1 className='lg:text-2xl md:text-2xl font-medium hover:underline hover:text-red-500 '>Shoes</h1>
                <p>(8)Products</p>
            </div>

                </div>
                <div >
                    <img className=' rounded-full' src="/src/Assets/Img/category-4.jpg" alt="" />
                    <div className='text-center p-5'>
                <h1 className='lg:text-2xl md:text-2xl font-medium hover:underline hover:text-red-500 '>Backpack</h1>
                <p>(3)Products</p>
            </div>

                </div>
                <div >
                    <img className=' rounded-full' src="/src/Assets/Img/category-5.jpg" alt="" />
                    <div className='text-center p-5'>
                <h1 className='lg:text-2xl md:text-2xl font-medium hover:underline hover:text-red-500 '>Accessories</h1>
                <p>(7)Products</p>
            </div>

                </div>
                
            

            </div>
        </div>
    );
};

export default Trendings;