import React from 'react';

const Search = () => {
    return (
        <div className='p-2 mt-2 mb-8'>
            <h1 className='font-medium text-xl font-sans'>Search</h1>
            <div className='divider'></div>
            <input type="text" placeholder="Search" className="input h-8 rounded-sm bg-gray-100 w-full max-w-full" />
        </div>
    );
};

export default Search;