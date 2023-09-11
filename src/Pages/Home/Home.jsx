import React from 'react';
import Banner from './Banner/Banner';
import FeaturedItems from './FeaturedItems/FeaturedItems';
import NewArrivals from './NewArrivals/NewArrivals';
import LatestNews from './LatestNews/LatestNews';
import GetInTouch from '../Shared/GetInTouch/GetInTouch';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <NewArrivals />
            <FeaturedItems />
            <LatestNews></LatestNews>
            {/* ********************************** */}
            <GetInTouch></GetInTouch>
            {/* ********************************** */}
        </>


    );
};

export default Home;