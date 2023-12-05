import {
  FaAlignLeft,
  FaRegStar,
} from "react-icons/fa6";

import React from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";

const bannerData = [
  {
    h1: 'Winter-23',
    h2: 'YEAR-2023',
    h3: 'Top Trend',
    img: 'http://surl.li/nyiev'
  },
  {
    h1: 'Winter-23',
    h2: 'YEAR-2023',
    h3: 'Top Trend',
    img: 'http://surl.li/nyihm'
  },
  {
    h1: 'Winter-23',
    h2: 'YEAR-2023',
    h3: 'Top Trend',
    img: 'http://surl.li/nyiij'
  },
  {
    h1: 'Winter-23',
    h2: 'YEAR-2023',
    h3: 'Top Trend',
    img: 'http://surl.li/nyiiu'
  },
]

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

      {
        !selected ?
          <div className="w-full lg:w-8/12">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
              {
                bannerData.map((data, index) => {
                  const { h1, h2, h3, img } = data;
                  return <SwiperSlide key={index}>
                    <div className="relative w-full">
                      <div className="absolute flex items-center justify-center flex-col gap-5 opacity-70 w-full h-full bg-[#f5f3f3] p-12 lg:p-20">
                        <h1 className="text-lg text-center bg-red-500 text-white p-2 left-0 top-0 absolute">{h1}</h1>
                        <h2 className="text-2xl text-center font-bold">{h2}</h2>
                        <h3 className="text-4xl text-center font-bold">{h3}</h3>
                        <Link to='/shops' className="px-3 py-1 mt-6 uppercase bg-black text-white font-bold w-full lg:w-1/4 mx-auto text-center hover:bg-red-600 " role="button">
                          Shop Now
                        </Link>
                      </div>
                      <img
                        src={img}
                        className="w-full h-96"
                      />
                    </div>
                  </SwiperSlide>
                })
              }
            </Swiper>
          </div>
          :
          <div className="w-full mx-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {
                selectedProducts.map(products => {
                  return <ProductCard option={products} />
                })
              }
            </div>
          </div>
      }

    </div >
  );
};

export default Banner;
