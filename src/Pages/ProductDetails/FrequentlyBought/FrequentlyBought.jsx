import React from 'react';

const FrequentlyBought = ({ productDetails }) => {

    const { image, name, price, _id } = productDetails;

    return (
        <div>
            <h1 className='lg:text-3xl font-medium border-none mt-8 mb-2 lg:px-0 px-3'>Frequently Bought Together</h1>
            <hr />

            <div className='flex items-center gap-4 my-8 border-none lg:px-0 px-3'>
                <div className='flex gap-2 '>
                    <div><img className='w-28' src={image} /></div>
                    <div className='flex items-center'>+</div>
                    <div><img className='w-28' src="/src/Assets/Img/product-10-100x100.jpg" alt="" /></div>
                </div>

                <div className='flex flex-col'>
                    <h1>Price for all: <span className='text-red-500'>${price}</span></h1>
                    <button className='px-4 py-1 bg-orange-400 rounded-lg mt-3 font-semibold hover:bg-orange-600 text-white' type="submit">Add All to Cart</button>
                </div>
            </div>
            <div className='border-none'>
                <ul className='list-disc lg:ml-4 ml-6'>
                    <li>This Product: {name} – ${price}</li>
                    <li>Checked Wool Blend Mini Skirt – $29.00</li>
                </ul>
            </div>
        </div>
    );
};

export default FrequentlyBought;