import React from 'react';
import ProductCard from '../../../Components/ProductCard/ProductCard';

const Trendings = ({ categories, selectedProducts, handleComponent }) => {

    const trendingCategory = categories.filter(category => {
        const result = category.option === 'trending';
        return result;
    })

    return (
        <div className='max-w-6xl mx-auto my-20'>
            <div className='text-center lg:m-0 mx-4'>
                <h1 className='text-2xl lg:text-4xl font-bold '>Trendings Categories</h1>
                <p className='text-xs lg:text-lg mt-3'>Find a bright ideal to suit your taste with our great selection of suspension.</p>
            </div>

            <div className='flex items-center justify-center gap-4 my-12 lg:mx-0 mx-4'>
                {
                    trendingCategory.map(items => {
                        const { _id, icon, category } = items;

                        return <div className='flex flex-col items-center' key={_id}>
                            <img className='h-24 lg:h-44 w-24 lg:w-44 rounded-full' src={icon} alt="" />
                            <div className='text-center p-5'>
                                <button onClick={()=>handleComponent(category)} className='lg:text-2xl md:text-2xl font-medium hover:underline hover:text-red-500'>{category}</button>
                                <p>{trendingCategory.length} <span>Products</span></p>
                            </div>
                        </div>
                    })
                }
            </div>

            <div className="mx-4">
                <div className="grid grid-cols-1  lg:grid-cols-3 gap-4">
                    {
                        selectedProducts.map(products => {
                            return <ProductCard key={products._id} option={products} />
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default Trendings;