import React from 'react';
import useCart from "../../../../Hooks/useCart";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import CartList from './CartList';
import { Link } from 'react-router-dom';

const MyCart = () => {

    const [cart, refetch] = useCart();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = (_id) => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`/carts/${_id}`)
                        .then(data => {
                            if (data.data) {
                                refetch();
                                Swal.fire(
                                    'Deleted!',
                                    'Product has been deleted.',
                                    'success'
                                )
                            }
                        })
                }
            })
        }
        catch (e) {
            console.error(e);
        }
    }

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className='flex flex-col-reverse lg:flex-col'>
            {
                cart.length > 0 &&
                <div className='flex flex-col gap-3 lg:flex-row items-center justify-between p-3 font-bold border-double border-b-4 border-black'>
                    <h1 className='text-center text-2xl'>Total Orders: {cart?.length || 0}</h1>
                    <h3 className='text-center text-2xl'>Total Price: ${totalPrice}</h3>
                    <Link to='/dashboard/checkout' className='w-full text-center lg:w-32 p-2 bg-orange-600 text-white hover:bg-black text-sm font-bold rounded'>Checkout</Link>
                </div>
            }
            <CartList handleDelete={handleDelete} />
        </div>
    );
};

export default MyCart;