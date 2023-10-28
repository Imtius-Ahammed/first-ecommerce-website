import React from 'react';

const Loader = () => {
    return (
        <div className='w-1/2 h-96 mx-auto flex items-center justify-center text-center'>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    );
};

export default Loader;