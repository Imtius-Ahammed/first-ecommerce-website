import React from 'react';
import Banner from './Banner/Banner';
import FeaturedItems from './FeaturedItems/FeaturedItems';
import NewArrivals from './NewArrivals/NewArrivals';
import GetInTouch from '../Shared/GetInTouch/GetInTouch';
import Trendings from './Trendings/Trendings';
import AdSection from './AdSection/AdSection';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Trendings></Trendings>
            <NewArrivals />
            <AdSection></AdSection>
            
            <FeaturedItems />
            <GetInTouch></GetInTouch>


        </>


    );
};

export default Home;