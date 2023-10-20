import React from 'react';
import logo from "../../Assets/Img/team logo.jpg";
import { Link } from "react-router-dom";
import YouTubeVideo from '../Shared/YouTubeVideo/YouTubeVideo';
import GetInTouch from '../Shared/GetInTouch/GetInTouch';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {

    const videoId = 'HGSR3FDVkkQ';

    return (
        <div>
            <Helmet>
                <title>Romi - About Us</title>
            </Helmet>
            <div className='px-4 py-4 lg:py-10'>
                <div className='flex flex-col items-center gap-3'>
                    <h1 className='text-4xl font-semibold'>About Us</h1>
                    <p className='w-full lg:w-1/3 text-center text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore</p>
                </div>
                <div>
                    <img className='h-60 lg:h-96 w-full lg:w-2/4 mx-auto my-12' src={logo} alt="" />
                </div>
                <div className='w-full lg:w-2/4 mx-auto'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-4xl font-normal'>Romi - Powerful Theme for Shop</h1>
                        <p className='text-lg font-light'>
                            Romi curates a selection of objects focused on quality, minimalism, and functionality. Our mission is to provide a unique set of products that fascinate and inspire the user. We review each product, down to its packaging, to ensure that we continuously provide the best in both quality and design. <br /><br />
                            <span className='text-sm font-normal text-gray-500'>
                                Our selection of products are designed and imported from all over the world. Whether from Denmark or Japan, some of these items have never received exposure in the United States. In addition, we are the exclusive North American distributor for a number of brands found within our store.
                            </span>
                            <br /><br />
                            <span>
                                We’re happy to help. If you have any questions regarding a product or an order, please feel free to reach out to us at <span className='font-normal'>romi@demo.com</span>.
                            </span>
                        </p>
                        <div className='divide-x-2 divide-orange-600'>
                            <div></div>
                            <p className='p-4 font-medium italic'>There’s also Scarlett Johansson in Lost in Translation (2003), who sports a powder-pink rendition; and in Crossroads (2002).</p>
                        </div>
                        <span className='text-gray-500'>Watch Wintour reflect on all this and more, <Link className='font-normal text-black'>here.</Link></span>
                    </div>
                    <div className="my-10">
                        <YouTubeVideo videoId={videoId} />
                    </div>
                </div>
                <div className='flex flex-col divide divide-y-2 w-full lg:w-2/4 mx-auto py-4'>
                    <div className='flex flex-col lg:flex-row gap-3 items-start justify-between py-10'>
                        <h1 className='text-3xl font-medium'>Our Mission</h1>
                        <p className='w-full lg:w-2/3'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium arm doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-3 items-start justify-between py-10'>
                        <h1 className='text-3xl font-medium'>Our Mission</h1>
                        <p className='w-full lg:w-2/3'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium arm doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                    </div>
                </div>
            </div>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default AboutUs;