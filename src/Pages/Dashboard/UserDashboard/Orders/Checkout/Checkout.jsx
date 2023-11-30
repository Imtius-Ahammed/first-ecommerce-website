import React, { useContext } from 'react';
import useCart from '../../../../../Hooks/useCart';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';

const Checkout = () => {

    const [cart] = useCart();
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit } = useForm();
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    const { user } = useContext(AuthContext);

    const onSubmit = data => {
        const { firstName, lastName, email, phone, currency, postcode, address } = data;
        const products = cart.map(item => ({
            _id: item._id,
            productId: item.productId,
            name: item.name,
            category: item.category,
            price: item.price,
        }));

        const paymentInfo = { firstName, lastName, email, phone, currency, postcode, address, totalPrice, products }
        axiosSecure.post('/payment-info', paymentInfo)
            .then(res => {
                console.log(res.data);
                window.location.replace(res.data.url);
                form.reset();
            })
    };

    return (
        <div>
            <form
                className='flex flex-col items-center justify-center p-2 gap-4 bg-slate-50'
                onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-2xl text-center font-bold border-b-4 border-black mb-6 p-2 w-full'>Checkout</h1>
                <div className='w-full lg:w-2/3 flex flex-col gap-3'>
                    <input
                        type='text'
                        {...register("firstName", { required: true, maxLength: 20 })}
                        className="input input-ghost w-full focus:outline-none bg-white input-bordered"
                        placeholder="Enter your first name"
                    />
                    <input
                        type='text'
                        {...register("lastName", { required: true, maxLength: 20 })}
                        className="input input-ghost w-full focus:outline-none bg-white input-bordered"
                        placeholder="Enter your last name"
                    />
                    <input
                        type='text'
                        {...register("email", { required: true, maxLength: 20 })}
                        className="input input-ghost w-full focus:outline-none bg-white input-bordered"
                        defaultValue={user?.email}
                    />
                    <input
                        type='text'
                        {...register("phone", { required: true, maxLength: 20 })}
                        className="input input-ghost w-full focus:outline-none bg-white input-bordered"
                        placeholder="Enter your phone number"
                    />
                    <div className='flex items-center gap-2'>
                        <select
                            className="select select-ghost w-1/3 focus:outline-none bg-white input-bordered"
                            {...register("currency")}>
                            <option value="BDT">BDT</option>
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
                        </select>
                        <input
                            type='text'
                            {...register("postcode", { required: true, maxLength: 20 })}
                            className="input input-ghost w-2/3 focus:outline-none bg-white input-bordered"
                            placeholder="Enter your post code"
                        />
                    </div>
                    <textarea
                        {...register("address", { required: true, maxLength: 20 })}
                        className="textarea textarea-ghost w-full focus:outline-none bg-white input-bordered" placeholder="Enter your address"></textarea>
                </div>
                <h1 className='my-3 text-lg font-bold'>Total Price: <span>${totalPrice}</span></h1>
                <button className='px-3 py-1 bg-orange-600 font-bold text-lg text-white hover:bg-black rounded'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Checkout;