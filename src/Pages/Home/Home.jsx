import React, { useState } from 'react';
import Banner from './Banner/Banner';
import FeaturedItems from './FeaturedItems/FeaturedItems';
import NewArrivals from './NewArrivals/NewArrivals';

import Trendings from './Trendings/Trendings';
import AdSection from './AdSection/AdSection';
import LatestNews from './LatestNews/LatestNews';
import GetInTouch from '../Shared/GetInTouch/GetInTouch';
import useCategories from '../../Hooks/useCategories';
import useProducts from '../../Hooks/useProducts';
import { Helmet } from 'react-helmet-async';
import Loader from '../Shared/Loader/Loader';

const Home = () => {

    const [categories] = useCategories();
    const [products, isLoading] = useProducts();
    const [selected, setSelected] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState(products);

    const newArrivals = products.filter(product => product.option === 'new arrivals');

    const featuredItems = products.filter(product => product.option === 'featured items');

    const handleComponent = (category) => {
        const categoryProducts = products.filter((product) => product.category === category);
        setSelectedProducts(categoryProducts)
        setSelected(true);
    }

    if(isLoading){
        return <Loader />
    }

    return (
        <>
            <Helmet>
                <title>Ecom BD - Home</title>
            </Helmet>
            <Banner
                categories={categories}
                selectedProducts={selectedProducts}
                selected={selected}
                handleComponent={handleComponent}>
            </Banner>

            <Trendings
                categories={categories}
                selectedProducts={selectedProducts}
                handleComponent={handleComponent}>
            </Trendings>

            <NewArrivals option={newArrivals} />

            <AdSection></AdSection>

            <FeaturedItems option={featuredItems} />

            <LatestNews></LatestNews>

            <GetInTouch></GetInTouch>
        </>


    );
};

export default Home;