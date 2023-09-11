import React from 'react';
import Banner from './Banner/Banner';
import FeaturedItems from './FeaturedItems/FeaturedItems';
import NewArrivals from './NewArrivals/NewArrivals';
<<<<<<< HEAD
import GetInTouch from '../Shared/GetInTouch/GetInTouch';
import Trendings from './Trendings/Trendings';
import AdSection from './AdSection/AdSection';
=======
import LatestNews from './LatestNews/LatestNews';
import GetInTouch from '../Shared/GetInTouch/GetInTouch';
>>>>>>> 89536c37bfdd7ea6e58b9a1090e8c28738a25828


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Trendings></Trendings>
            <NewArrivals />
            <AdSection></AdSection>
            
            <FeaturedItems />
<<<<<<< HEAD
            <GetInTouch></GetInTouch>


=======
            <LatestNews></LatestNews>
            <GetInTouch></GetInTouch>
>>>>>>> 89536c37bfdd7ea6e58b9a1090e8c28738a25828
        </>


    );
};

export default Home;