import React from 'react';
import useCart from "../../../Hooks/useCart";

const Orders = () => {

    const [cart] = useCart();

    return (
        <div>
            <h1 className='p-3 font-bold border-double border-b-4 border-black text-center text-2xl'>Total Orders: {cart?.length || 0}</h1>
            {
                cart?.length > 0 ?
                    <div className='grid grid-cols-1 gap-8 my-6'>
                        {
                            cart.map((item, index) => {
                                const { name, price, _id } = item.productsDetails;

                                return <div
                                    className='flex border-l-4 border-black lg:flex-row flex-col items-center text-center justify-between gap-4 w-full p-2 rounded bg-slate-200'
                                    key={_id}>
                                    <h1 className='text-start w-full lg:w-3/6 rounded bg-slate-50 p-1 text-lg font-semibold'>
                                        <span className='mr-3'>{index+1}.</span>
                                        {name}
                                    </h1>
                                    <p className='w-full font-semibold lg:w-1/6 text-lg rounded text-orange-600 bg-slate-50 p-1'>${price}</p>
                                    <button className='w-full lg:w-1/6 p-2 bg-black text-white hover:bg-[#4f4f4f] text-sm font-bold rounded'>Checkout</button>
                                    <button className='w-full lg:w-1/6 p-2 bg-black text-white text-sm font-bold rounded'>Delete</button>
                                </div>
                            })
                        }
                    </div>
                    :
                    <div className='text-3xl font-bold text-center p-20 border-4 border-black flex items-center justify-center'>
                        <h1>There are no products in this Cart</h1>
                    </div>
            }
        </div>
    );
};

export default Orders;