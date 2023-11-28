import React, { useState } from 'react';
import ProductsForm from './ProductsForm';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddProducts = () => {

    const [axiosSecure] = useAxiosSecure();

    const [product, setProduct] = useState({
        name: '',
        image: '',
        rating: '',
        price: '',
        option: '',
        category: '',
        product_code: '',
        tag: '',
        brand_name: '',
        brand_description: '',
        brand_logo: '',
        description: '',
        delivery_policies: '',
        sample_img1: '',
        sample_img2: '',
        sample_img3: '',
        color1: '',
        color2: '',
        color3: '',
        size1: '',
        size2: '',
        size3: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosSecure.post('/product', product)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Item Added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };

    return (
        <div>
            <ProductsForm
                handleSubmit={handleSubmit}
                product={product}
                setProduct={setProduct} />
        </div>
    );
};

export default AddProducts;