import React from 'react';
import {MdDelete} from '@react-icons/all-files/md/MdDelete';
import {MdAddToPhotos} from '@react-icons/all-files/md/MdAddToPhotos';
import { Link } from 'react-router-dom';

const ProductsList = ({ allProducts, handleDelete }) => {
    return (
        <div className="overflow-x-auto shadow-xl">
            <table className="table">
                <thead className='text-center bg-black text-white'>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        allProducts.map((products, index) => {
                            const { _id, name, price } = products;
                            return <tr key={_id} className="hover">
                                <th>{index + 1}</th>
                                <td>{name}</td>
                                <td>${price}</td>
                                <td className='flex items-center justify-center'>
                                    <Link to={`/dashboard/update-product/${_id}`}>
                                        <MdAddToPhotos
                                        title='Update' 
                                        className='text-2xl font-bold text-orange-600 hover:text-black' />
                                    </Link>
                                    <div className="divider divider-horizontal"></div>
                                    <button onClick={() => handleDelete(_id)}>
                                        <MdDelete className='text-2xl font-bold text-orange-600 hover:text-black' />
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductsList;