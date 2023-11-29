import React from 'react';
import useCart from '../../../../../Hooks/useCart';

const Checkout = () => {

    const [cart] = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.productDetails.price, 0);

    return (
        <div>
            {totalPrice}
        </div>
    );
};

export default Checkout;