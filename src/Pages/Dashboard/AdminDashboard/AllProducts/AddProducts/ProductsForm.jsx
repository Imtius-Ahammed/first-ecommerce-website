const ProductsForm = ({handleSubmit, product, setProduct}) => {
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    return (
        <div>
            <h1 className='text-2xl font-bold text-center border-b-2 border-black mb-6 p-3'>Add Product</h1>
            <form onSubmit={handleSubmit} className=''>
                <div className='flex lg:flex-row flex-col bg-slate-50 gap-3 p-4 w-full shadow-xl'>
                    <div className='flex flex-col w-full'>
                        <div className='flex w-full items-center bg-white p-2'>
                            <h1 className='text-lg font-bold w-28'>Name:</h1>
                            <input
                                type="text"
                                name="name"
                                value={product.name}
                                onChange={handleChange}
                                placeholder="Enter product name here"
                                className="input input-ghost w-full text-lg focus:outline-none"
                            />
                        </div>
                        <div className='flex w-full items-center bg-white p-2'>
                            <h1 className='text-lg font-bold w-28'>Image:</h1>
                            <input
                                type="text"
                                name="image"
                                value={product.image}
                                onChange={handleChange}
                                placeholder="Enter product image here"
                                className="input input-ghost w-full text-lg focus:outline-none"
                            />
                        </div>
                        <div className='flex w-full items-center bg-white p-2'>
                            <h1 className='text-lg font-bold w-28'>Rating:</h1>
                            <input
                                type="text"
                                name="rating"
                                value={product.rating}
                                onChange={handleChange}
                                placeholder="Enter product rating here"
                                className="input input-ghost w-full text-lg focus:outline-none"
                            />
                        </div>
                        <div className='flex w-full items-center bg-white p-2'>
                            <h1 className='text-lg font-bold w-28'>Price:</h1>
                            <input
                                type="text"
                                name="price"
                                value={product.price}
                                onChange={handleChange}
                                placeholder="Enter product price here"
                                className="input input-ghost w-full text-lg focus:outline-none"
                            />
                        </div>
                        <div className='flex w-full items-center bg-white p-2'>
                            <h1 className='text-lg font-bold w-28'>Product Code:</h1>
                            <input
                                type="text"
                                name="product_code"
                                value={product.product_code}
                                onChange={handleChange}
                                placeholder="Enter product code here"
                                className="input input-ghost w-full text-lg focus:outline-none"
                            />
                        </div>
                        <div className='flex w-full items-center bg-white p-2'>
                            <h1 className='text-lg font-bold w-28'>Tag:</h1>
                            <input
                                type="text"
                                name="tag"
                                value={product.tag}
                                onChange={handleChange}
                                placeholder="Enter product tag here"
                                className="input input-ghost w-full text-lg focus:outline-none"
                            />
                        </div>
                        <div className='flex w-full items-center bg-white p-2'>
                            <h1 className='text-lg font-bold w-28'>Brand:</h1>
                            <input
                                type="text"
                                name="brand_name"
                                value={product.brand_name}
                                onChange={handleChange}
                                placeholder="Enter brand name here"
                                className="input input-ghost w-full text-lg focus:outline-none"
                            />
                        </div>
                        <div className='flex w-full items-center bg-white p-2'>
                            <h1 className='text-lg font-bold w-28'>Logo:</h1>
                            <input
                                type="text"
                                name="brand_logo"
                                value={product.brand_logo}
                                onChange={handleChange}
                                placeholder="Enter brand logo here"
                                className="input input-ghost w-full text-lg focus:outline-none"
                            />
                        </div>
                        <div className='flex w-full items-center bg-white p-2'>
                            <h1 className='text-lg font-bold w-28'>Category:</h1>
                            <select
                                name="category"
                                value={product.category}
                                onChange={handleChange}
                                className="select select-ghost w-full text-lg text-gray-400 font-normal focus:outline-none"
                            >
                                <option>Dresses</option>
                                <option>Backpack</option>
                                <option>Accessories</option>
                                <option>Shoes</option>
                                <option>Tops & T-Shirt</option>
                                <option>Men's</option>
                                <option>Children's</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='flex w-full items-center bg-white p-2'>
                            <h1 className='text-lg font-bold w-28'>Option:</h1>
                            <select
                                name="option"
                                value={product.option}
                                onChange={handleChange}
                                className="select select-ghost w-full text-lg text-gray-400 font-normal focus:outline-none"
                            >
                                <option>featured items</option>
                                <option>new arrivals</option>
                            </select>
                        </div>
                        <div className='flex w-full bg-white p-2'>
                            <h1 className='text-lg font-bold w-20'>Color:</h1>
                            <div className='w-64'>
                                <select
                                    name="color1"
                                    value={product.color1}
                                    onChange={handleChange}
                                    className="select select-ghost w-full text-lg text-gray-400 font-normal focus:outline-none"
                                >
                                    <option>Blue</option>
                                    <option>Black</option>
                                    <option>White</option>
                                    <option>Red</option>
                                </select>
                                <select
                                    name="color2"
                                    value={product.color2}
                                    onChange={handleChange}
                                    className="select select-ghost w-full text-lg text-gray-400 font-normal focus:outline-none"
                                >
                                    <option>Blue</option>
                                    <option>Black</option>
                                    <option>White</option>
                                    <option>Red</option>
                                </select>
                                <select
                                    name="color3"
                                    value={product.color3}
                                    onChange={handleChange}
                                    className="select select-ghost w-full text-lg text-gray-400 font-normal focus:outline-none"
                                >
                                    <option>Blue</option>
                                    <option>Black</option>
                                    <option>White</option>
                                    <option>Red</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex w-full gap-3 bg-white p-2'>
                            <h1 className='text-lg font-bold w-20'>Size:</h1>
                            <div className='w-64'>
                                <select
                                    name="size1"
                                    value={product.size1}
                                    onChange={handleChange}
                                    className="select select-ghost w-full text-lg text-gray-400 font-normal focus:outline-none"
                                >
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                    <option>XXL</option>
                                </select>
                                <select
                                    name="size2"
                                    value={product.size2}
                                    onChange={handleChange}
                                    className="select select-ghost w-full text-lg text-gray-400 font-normal focus:outline-none"
                                >
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                    <option>XXL</option>
                                </select>
                                <select
                                    name="size3"
                                    value={product.size3}
                                    onChange={handleChange}
                                    className="select select-ghost w-full text-lg text-gray-400 font-normal focus:outline-none"
                                >
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                    <option>XXL</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex w-full bg-white p-2'>
                            <h1 className='text-lg font-bold w-20'>Sample:</h1>
                            <div className='w-64 flex flex-col gap-3'>
                                <input
                                    type="text"
                                    name="sample_img1"
                                    value={product.sample_img1}
                                    onChange={handleChange}
                                    placeholder="Enter sample image URL here"
                                    className="input input-ghost w-full text-lg focus:outline-none"
                                />
                                <input
                                    type="text"
                                    name="sample_img2"
                                    value={product.sample_img2}
                                    onChange={handleChange}
                                    placeholder="Enter sample image URL here"
                                    className="input input-ghost w-full text-lg focus:outline-none"
                                />
                                <input
                                    type="text"
                                    name="sample_img3"
                                    value={product.sample_img3}
                                    onChange={handleChange}
                                    placeholder="Enter sample image URL here"
                                    className="input input-ghost w-full text-lg focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col p-4 bg-slate-50 gap-3 w-full shadow-xl'>
                    <div className='flex w-full items-center bg-white p-2'>
                        <h1 className='text-lg font-bold w-full lg:w-52'>Description:</h1>
                        <textarea
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            className="textarea textarea-ghost w-full text-lg focus:outline-none"
                            placeholder="Enter product description here"
                        ></textarea>
                    </div>
                    <div className='flex w-full items-center bg-white p-2'>
                        <h1 className='text-lg font-bold w-full lg:w-52'>Brand Description:</h1>
                        <textarea
                            name="brand_description"
                            value={product.brand_description}
                            onChange={handleChange}
                            className="textarea textarea-ghost w-full text-lg focus:outline-none"
                            placeholder="Enter brand description here"
                        ></textarea>
                    </div>
                    <div className='flex w-full items-center bg-white p-2'>
                        <h1 className='text-lg font-bold w-full lg:w-52'>Delivery Policies:</h1>
                        <textarea
                            name="delivery_policies"
                            value={product.delivery_policies}
                            onChange={handleChange}
                            className="textarea textarea-ghost w-full text-lg focus:outline-none"
                            placeholder="Enter delivery policies here"
                        ></textarea>
                    </div>
                </div>

                <button className='p-2 bg-orange-600 hover:bg-black text-white font-bold w-full' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ProductsForm;
