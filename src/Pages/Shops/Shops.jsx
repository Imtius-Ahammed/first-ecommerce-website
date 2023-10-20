import React, { useState } from 'react';
import LeftContent from './LeftContent/LeftContent';
import RightContent from './RightContent/RightContent';
import useCategories from '../../Hooks/useCategories';
import useProducts from '../../Hooks/useProducts';
import { Helmet } from 'react-helmet-async';

const Shops = () => {

    const [categories] = useCategories();
    const [products] = useProducts();

    const [selectedProducts, setSelectedProducts] = useState([]);
    const [selected, setSelected] = useState(false);

    const [showBtn, setShowBtn] = useState(true);

    const filteredProducts = (category) => {
        const items = products.filter(product => product.category === category);
        setSelectedProducts(items)
        setSelected(true)
        if (selectedProducts.length < 9) {
            setShowBtn(false)
        }
    }

    return (
        <div>
            <Helmet>
                <title>Romi - Shops</title>
            </Helmet>
            <div className='flex flex-col lg:flex-row justify-between gap-6 w-full lg:w-9/12 mx-auto my-12 lg:px-0 px-2'>
                <div className='w-full lg:w-1/4'>
                    <LeftContent
                        products={products}
                        filteredProducts={filteredProducts}
                        categories={categories}>
                    </LeftContent>
                </div>
                <div className='w-full lg:w-3/4'>
                    <RightContent
                        selectedProducts={selectedProducts}
                        products={products}
                        selected={selected}
                        showBtn={showBtn}
                        setShowBtn={setShowBtn}>
                    </RightContent>
                </div>
            </div>
        </div>
    );
};

export default Shops;