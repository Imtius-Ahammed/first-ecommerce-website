import React from 'react';
import ProductCard from '../../../Components/ProductCard/ProductCard';

const FeaturedItems = () => {
    // const mens = [
    //     {
    //         img: "https://cdn.shopify.com/s/files/1/0271/4822/2521/files/3124-KT28-001_large.png?v=1692396817",
    //         rating: 2,
    //         name: "Classic Tailored Blazer",
    //         price: "$60.00",
    //     },
    //     {
    //         img: "https://cdn.shopify.com/s/files/1/0271/4822/2521/files/3124-KT28-001_large.png?v=1692396817",
    //         rating: 3,
    //         name: "Classic Tailored Blazer",
    //         price: "$60.00",
    //     },
    //     {
    //         img: "https://cdn.shopify.com/s/files/1/0271/4822/2521/files/3124-KT28-001_large.png?v=1692396817",
    //         rating: 4,
    //         name: "Classic Tailored Blazer",
    //         price: "$60.00",
    //     },
    //     {
    //         img: "https://cdn.shopify.com/s/files/1/0271/4822/2521/files/3124-KT28-001_large.png?v=1692396817",
    //         rating: 5,
    //         name: "Classic Tailored Blazer",
    //         price: "$60.00",
    //     },


    // ]
    // const children = [
    //     {
    //         img: "https://www.transparentpng.com/thumb/shirt/ytM0vF-red-polo-tshirt-fron-view-t-shirt.png",
    //         rating: 1,
    //         name: "Classic children Blazer",
    //         price: "$60.00",
    //     }

    // ]
    // const [activeButton, setActiveButton] = useState(0);

    // const handleButtonClick = (button) => {
    //     setActiveButton(button);
    // };

    // const buttons = ['For Men', 'For Children'];

    // let selectedContent;

    // if (activeButton === 0) {

    //     selectedContent = (
    //         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 px-12 sm:px-0 cursor-pointer'>
    //             {mens.map((product, index) => (<ProductCard key={index} product={product} />))}
    //         </div>
    //     );
    // } else if (activeButton === 1) {

    //     selectedContent = (
    //         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 px-12 sm:px-0 cursor-pointer'>
    //             {children.map((product, index) => (<ProductCard key={index} product={product} />))}
    //         </div>
    //     );
    // }

    return (
        <div className="max-w-6xl mx-auto my-20 relative">
            <h1 className='text-center text-4xl font-semibold my-6'>Featured Items</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 px-12 sm:px-0 cursor-pointer'>
                <ProductCard />
            </div>
            {/* <div className='flex items-center justify-evenly mx-auto lg:w-1/3'>
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        className={`text-2xl ${activeButton === index ? 'underline underline-offset-8 text-emerald-400' : 'hover:text-emerald-400'}`}
                        onClick={() => handleButtonClick(index)}
                    >
                        {button}
                    </button>
                ))}
            </div>
            {selectedContent} */}
        </div>
    );
};

export default FeaturedItems;