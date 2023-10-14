import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import FeaturedItems from './FeaturedItems/FeaturedItems';
import NewArrivals from './NewArrivals/NewArrivals';

import Trendings from './Trendings/Trendings';
import AdSection from './AdSection/AdSection';
import LatestNews from './LatestNews/LatestNews';
import GetInTouch from '../Shared/GetInTouch/GetInTouch';
import useCategories from '../../Hooks/useCategories';
import useProducts from '../../Hooks/useProducts';

const Home = () => {

    const [categories] = useCategories();
    const [products] = useProducts();

    const newArrivals = products.filter(product => product.option === 'new arrivals');

    const featuredItems = products.filter(product => product.option === 'featured items');

    return (
        <>
            <Banner categories={categories} products={products}></Banner>

            <Trendings categories={categories} products={products}></Trendings>

            <NewArrivals option={newArrivals} />

            <AdSection></AdSection>

            <FeaturedItems option={featuredItems} />

            <LatestNews></LatestNews>

            <GetInTouch></GetInTouch>
        </>


    );
};

export default Home;