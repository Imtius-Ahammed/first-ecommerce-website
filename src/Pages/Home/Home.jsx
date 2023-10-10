import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import FeaturedItems from './FeaturedItems/FeaturedItems';
import NewArrivals from './NewArrivals/NewArrivals';

import Trendings from './Trendings/Trendings';
import AdSection from './AdSection/AdSection';
import LatestNews from './LatestNews/LatestNews';
import GetInTouch from '../Shared/GetInTouch/GetInTouch';

const Home = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        try{
            fetch('http://localhost:5000/products-categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
        }
        catch(e){
            console.log(e);
        }
    },[]);

    return (
        <>
            <Banner categories={categories}></Banner>
            <Trendings categories={categories}></Trendings>
            <NewArrivals />
            <AdSection></AdSection>

            <FeaturedItems />
            <LatestNews></LatestNews>
            {/* ********************************** */}
            <GetInTouch></GetInTouch>
            {/* ********************************** */}
        </>


    );
};

export default Home;