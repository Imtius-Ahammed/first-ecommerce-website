import {
  FaAlignLeft,
  FaRegStar,
} from "react-icons/fa6";

import React from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const Banner = ({ categories, selectedProducts, selected, handleComponent }) => {

  return (
    <div className="container mx-auto flex gap-4 lg:w-9/12 max-h-full">
      <div className="w-4/12 border shadow-md h-full lg:block hidden">
        <div className="dropdown  dropdown-right  w-full border ">
          <label tabIndex={0}>
            <div className="flex gap-2 p-4 bg-black text-white hover:text-sky-400">
              <FaAlignLeft className="mt-2 text-xl ml-3"></FaAlignLeft> <h3 className=" text-xl  ">Browse Our Sales</h3>
            </div>
          </label>
        </div>

        <div className="h-full flex flex-col justify-center">
          {
            categories.map(items => {
              const { _id, category } = items;

              return <button
                onClick={() => handleComponent(category)}
                key={_id}
                className="dropdown dropdown-hover dropdown-right w-full border">
                <label tabIndex={0}>
                  <div className="flex gap-2 p-4 hover:text-sky-400 ">
                    <FaRegStar className="mt-2 text-xl ml-3"></FaRegStar> <h3 className=" text-xl ">{category}</h3>
                  </div>
                </label>
              </button>
            })
          }
        </div>
      </div>

      <div div className={!selected ? "w-full mx-4" : 'hidden'}>
        <div className="flex justify-center">
          <div className="carousel w-11/12  h-[35rem]">
            <div id="slide1" className="carousel-item relative w-full">
              <div className="absolute p-11 m-11">
                <h3 className="text-xl bg-red-500 text-white w-28 p-2">Winter-23</h3>
                <h1 className="text-5xl font-bold mt-5"> SS-2023</h1>
                <h1 className="text-5xl font-bold mb-5"> Top Trend</h1>
                <a className="btn btn-primary mt-6 btn-xl hover:bg-red-600 " href="#" role="button">
                  {" "}
                  Shop Now{" "}
                </a>
              </div>
              <img
                src="https://www.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej-760x400.webp"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <div className="absolute p-11 m-11">
                <h3 className="text-xl bg-red-500 text-white w-28 p-2">Winter-23</h3>
                <h1 className="text-5xl font-bold mt-5"> SS-2023</h1>
                <h1 className="text-5xl font-bold mb-5"> Top Trend</h1>
                <a className="btn btn-primary mt-6 btn-xl hover:bg-red-600 " href="#" role="button">
                  {" "}
                  Shop Now{" "}
                </a>
              </div>
              <img
                src="https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/05/Malls-in-Mumbai.jpg?fit=1000%2C678&ssl=1"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <div className="absolute p-11 m-11">
                <h3 className="text-xl bg-red-500 text-white w-28 p-2">Winter-23</h3>
                <h1 className="text-5xl font-bold mt-5"> SS-2023</h1>
                <h1 className="text-5xl font-bold mb-5"> Top Trend</h1>
                <a className="btn btn-primary mt-6 btn-xl hover:bg-red-600 " href="#" role="button">
                  {" "}
                  Shop Now{" "}
                </a>
              </div>
              <img
                src="https://image-tc.galaxy.tf/wijpeg-5hwpt4qbfrteko9t5pkqcyqn3/shopping-resize_standard.jpg?crop=69%2C0%2C1783%2C1337"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <div className="absolute p-11 m-11">
                <h3 className="text-xl bg-red-500 text-white w-28 p-2">Winter-23</h3>
                <h1 className="text-5xl font-bold mt-5"> SS-2023</h1>
                <h1 className="text-5xl font-bold mb-5"> Top Trend</h1>
                <a className="btn btn-primary mt-6 btn-xl hover:bg-red-600 " href="#" role="button">
                  {" "}
                  Shop Now{" "}
                </a>
              </div>
              <img
                src="https://st4.depositphotos.com/4678277/40811/i/450/depositphotos_408110334-stock-photo-full-length-body-size-view.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={selected ? "w-full mx-4" : 'hidden'}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {
            selectedProducts.map(products => {
              return <ProductCard option={products} />
            })
          }
        </div>
      </div>
    </div >
  );
};

export default Banner;
