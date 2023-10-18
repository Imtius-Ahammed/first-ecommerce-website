import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import Social from './Social/Social';
import FrequentlyBought from './FrequentlyBought/FrequentlyBought';
import DetailsBtn from './DetailsBtn/DetailsBtn';
import Details from './Details/Details';
import useProducts from '../../Hooks/useProducts';


const ProductDetails = () => {
    const productDetails = useLoaderData();
    const [btn, setHandleBtn] = useState('Descriptions');
    const [showImage, setShowImage] = useState(null);
    const [hideImage, setHideImage] = useState(false);
    
    const {products} = useProducts();
    const relatedProducts=(category) => products.filter(product=>{
        product.category=== category;

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
            <Details
                handleShowImageBtn={handleShowImageBtn}
                showImage={showImage}
                hideImage={hideImage}
                productDetails={productDetails} />
            <FrequentlyBought relatedProducts={relatedProducts} productDetails={productDetails} />
            <DetailsBtn
                btn={btn}
                handleBtn={handleBtn} />
            <Social />
            <RelatedProducts productDetails={productDetails} />
        </div>
    );
};

export default ProductDetails;