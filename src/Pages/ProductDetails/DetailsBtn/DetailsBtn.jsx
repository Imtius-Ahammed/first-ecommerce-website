import React from 'react';
import { Link } from 'react-router-dom';
import Descriptions from '../Descriptions/Descriptions';
import AboutBrands from '../AboutBrands/AboutBrands';
import Shipping from '../Shipping/Shipping';
import RatingsReviews from '../RatingsReviews/RatingsReviews';

const DetailsBtn = ({handleBtn, btn}) => {
    return (
        <div className='border-none'>
            <div className="text-xl breadcrumbs flex items-center justify-center my-6">
                <ul>
                    <li>
                        <button className='hover:font-bold hover:underline' onClick={() => handleBtn('Descriptions')}>
                            <Link>Description</Link>
                        </button>
                    </li>
                    <li>
                        <button className='hover:font-bold hover:underline' onClick={() => handleBtn('RatingsReviews')}>
                            <Link>Reviews</Link>
                        </button>
                    </li>
                    <li>
                        <button className='hover:font-bold hover:underline' onClick={() => handleBtn('AboutBrands')}>
                            <Link>About Brands</Link>
                        </button>
                    </li>
                    <li>
                        <button className='hover:font-bold hover:underline' onClick={() => handleBtn('Shipping')}>
                            <Link>Shipping & Delivery</Link>
                        </button>
                    </li>

                </ul>
            </div>

            <div className='px-4'>
                {btn === 'Descriptions' && <Descriptions />}
                {btn === 'RatingsReviews' && <RatingsReviews />}
                {btn === 'AboutBrands' && <AboutBrands />}
                {btn === 'Shipping' && <Shipping />}
                {btn === 'RelatedProducts' && <RelatedProducts />}
            </div>

        </div>
    );
};

export default DetailsBtn;