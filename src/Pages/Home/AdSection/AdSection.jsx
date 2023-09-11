import React from 'react';

const AdSection = () => {
    return (
        <div className='max-w-6xl mx-auto '>
            <div className='flex justify-around'>
                <div className='relative lg:block hidden' >
                    <img src="/src/Assets/Img/banner-1.jpg" alt="" />
                       <div className="absolute top-20 py-3 w-full text-center">
                       <div className='flex justify-center'> <img src="/src/Assets/Img/Special-Sale.png" alt="" /></div>
                       <h1>ENTER CODE: <span className='bg-red-500 p-1 '>SUM50</span></h1>
      <h1 class=" font-semibold text-4xl lg:text-4xl text-red-500">50 % OFF </h1>

      <button className="btn btn-neutral my-5">Shop now</button>
    
    </div>
                   

                    </div>
                <div className='mx-2 lg:mx-0' >
                    <img src="/src/Assets/Img/banner-2.jpg" alt="" />
                    </div>

            </div>
        </div>
    );
};

export default AdSection;