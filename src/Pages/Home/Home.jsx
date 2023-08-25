import React from 'react';
import Banner from './Banner/Banner';
import FeaturedItems from './FeaturedItems/FeaturedItems';
import NewArrivals from './NewArrivals/NewArrivals';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <NewArrivals />
            <FeaturedItems />


        </>


    );
};

export default Home;