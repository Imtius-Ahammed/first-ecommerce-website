import React, { useContext, useEffect, useState } from 'react';
import WishList_Compare from '../WishList_Compare/WishList_Compare';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa6';
import { AuthContext } from '../../Contexts/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../../Hooks/useCart';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Details = ({ handleShowImageBtn, productDetails, showImage, hideImage }) => {

    const { category, description, image, sample_img1, sample_img2, sample_img3, size1, size2, size3, name, option, tag, price, rating, _id } = productDetails;

    const sample_img = [
        sample_img1, sample_img2, sample_img3
    ]
    const size = [
        size1, size2, size3
    ]

    const [selectedSize, setSelectedSize] = useState('');
    const handleSize = (id) => {
        setSelectedSize(id);
    }
    useEffect(() => {
        if (selectedSize) {
          Swal.fire({
            icon: 'success',
            title: `${selectedSize} Size Selected`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      }, [selectedSize]);

    const { user } = useContext(AuthContext);

    const [, refetch] = useCart();
    const [axiosSecure] = useAxiosSecure();

    const handleCart = (_id) => {
        if (user && user?.email) {
            const cartData = { productId:_id, image, rating, name, price, selectedSize, email: user?.email };
            axiosSecure.post('/carts', cartData)
                .then(data => {
                    refetch();
                    if (data.data && user?.email) {
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
        <div className='flex lg:flex-row flex-col justify-center gap-6'>
            <div className='lg:w-2/4 lg:px-0 px-3  w-full flex flex-col-reverse items-center justify-center lg:flex-row gap-2'>
                <div className='w-full flex lg:flex-col flex-row flex-wrap my-6 lg:w-2/5 '>
                    {
                        sample_img?.map((img, index) => {
                            return <button key={index} onClick={() => handleShowImageBtn(index)}>
                                <img className='w-32 mx-auto mb-2' src={img} alt="" />
                            </button>
                        })
                    }

                </div>
                <div className='flex items-center justify-center w-96 h-96'>
                    {
                        !showImage && !hideImage ?
                            <img className='w-full h-96 mb-2' src={image} alt="" />
                            :
                            <img className='w-full h-96 mb-2' src={sample_img[showImage]} alt="" />
                    }
                </div>
            </div>
            <div className='w-full lg:w-2/4 lg:px-0 px-3  '>
                <h1 className='lg:text-4xl my-2 font-medium'>{name}</h1>
                <div className='flex items-center mb-4 text-orange-300'>
                    <FaStar></FaStar>
                    {rating}
                    <span className='text-black'>(1 Customer review)</span>
                </div>
                <h1 className='lg:text-4xl font-medium mb-4 '>${price}</h1>
                <p className='list-disc'>
                    {description}
                </p>
                <p className='text-green-500 mt-3 font-medium mb-4'>In Stock</p>
                <div className='flex items-center gap-3 my-6'>
                    <span className='text-lg font-medium'>Size:</span>
                    {
                        size?.map((item, index) => {
                            return <button
                                key={index}
                                onClick={() =>handleSize(item)
                                }
                                className='px-2 py-1 bg-black text-white hover:bg-[#454444]'>
                                {item}
                            </button>
                        })
                    }
                </div>
                <button onClick={() => handleCart(_id)} className='btn btn-neutral mb-8' type="submit">Add To Cart</button>

                <WishList_Compare />
                <hr />
                <div>
                    <h1 className='mt-4 mb-2 font-bold uppercase bg-sky-900 text-white w-36 rounded text-center p-1'>{option}</h1>
                    <h1 className='mb-2'>Categories: <Link className='text-slate-500'>{category}</Link></h1>
                    <p>Tags: <span className='ml-2 text-slate-500'>{tag}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Details;