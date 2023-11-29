import React, { useContext } from 'react';
import { FaCartPlus, FaStar } from 'react-icons/fa';
import { BiLinkExternal, BiHeart } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import { AuthContext } from '../../Pages/Contexts/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const ProductCard = ({ option }) => {

    const { _id, image, rating, name, price } = option;
    const [, refetch] = useCart();
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const handleCart = (_id) => {
        if (user && user?.email) {
            const cartData = { productDetails: option, email: user?.email };
            axiosSecure.post('/carts', cartData)
                .then(res => {
                    refetch();
                    if (res.data && user?.email) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Item Added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Login First...',
                text: "You are not logged in!!!"
            })
        }
    }


    return (
        <Link to={`/product-details/${_id}`} key={_id} className={`py-2 hover:scale-105 duration-500 relative`}>
            <div className=' bg-slate-200 h-96'>
                <img src={image} alt="" className='p-3 w-full h-full' />
            </div>
            <div className='pt-2 px-1'>
                <p className='flex items-center gap-1 text-yellow-500 my-2'>
                    <FaStar />{rating}
                </p>
                <p className='text-gray-500 font-medium'>{name}</p>
                <div className='flex items-center justify-between'>
                    <p className='font-bold'>${price}</p>
                    <button onClick={() => handleCart(_id)}
                        className="text-2xl font-semibold hover:text-emerald-400 mb-3">
                        <FaCartPlus size={22} className='' />
                    </button>
                </div>
            </div>
            <div className='absolute top-6 right-0 pr-4'>
                <Link to={`/product-details/${_id}`}>
                    <button
                        className="bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center text-2xl font-semibold hover:bg-emerald-400 hover:text-white mb-3"
                    >
                        <BiLinkExternal size={19} />
                    </button></Link>
                <button
                    className="bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center text-2xl font-semibold hover:bg-emerald-400 hover:text-white mb-3"
                >
                    <BiHeart size={19} />
                </button>
            </div>
        </Link>
    );
};

export default ProductCard;