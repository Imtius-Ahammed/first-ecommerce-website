import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import Social from './Social/Social';
import FrequentlyBought from './FrequentlyBought/FrequentlyBought';
import DetailsBtn from './DetailsBtn/DetailsBtn';
import Details from './Details/Details';
import useProducts from '../../Hooks/useProducts';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../Hooks/useAxiosSecure';


const ProductDetails = () => {
    const [btn, setHandleBtn] = useState('Descriptions');
    const [productDetails, setProductDetails] = useState([]);
    const [showImage, setShowImage] = useState(null);
    const [hideImage, setHideImage] = useState(false);
    const [axiosSecure] = useAxiosSecure();
    const { id } = useParams();

    useEffect(() => {
        axiosSecure.get(`/products/${id}`)
            .then(response => {
                setProductDetails(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    const { products } = useProducts();
    const relatedProducts = (category) => products.filter(product => {
        product.category === category;

    })
    const handleBtn = (componentName) => {
        setHandleBtn(componentName);
    };

    const handleShowImageBtn = (index) => {
        setShowImage(index);
        setHideImage(true)
    }

    return (
        <div className='mx-auto w-full lg:w-9/12 '>
            <Helmet>
                <title>Romi - Product Details</title>
            </Helmet>
            <Details
                handleShowImageBtn={handleShowImageBtn}
                showImage={showImage}
                hideImage={hideImage}
                productDetails={productDetails} />
            <FrequentlyBought relatedProducts={relatedProducts} productDetails={productDetails} />
            <DetailsBtn
                btn={btn}
                handleBtn={handleBtn}
                productDetails={productDetails} />
            <Social />
            <RelatedProducts productDetails={productDetails} />
        </div>
    );
};

export default ProductDetails;