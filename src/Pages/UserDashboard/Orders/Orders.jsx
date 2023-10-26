import React from 'react';
import useCart from "../../../Hooks/useCart";

const Orders = () => {

    const [cart] = useCart();

    return (
        <div>
            <h1 className='p-3 font-bold border-double border-b-4 border-black text-center text-2xl'>Total Orders: {cart?.length || 0}</h1>
            {
                cart.map(item => {
                    const {name, _id} = item.productsDetails; 
                    console.log(item.productsDetails);

                    return <div key={_id}>
                        <h1>{name}</h1>
                    </div>
                })
            }
        </div>
    );
};

export default Orders;