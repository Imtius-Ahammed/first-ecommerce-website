import React from 'react';
import Search from './Search';
import RecentPosts from './RecentPosts';
import RecentComments from './RecentComments';

const RightContent = () => {
    return (
        <div className='bg-[#f2f5f5f5] p-2 mt-10'>
            <Search></Search>
            <RecentPosts></RecentPosts>
            <RecentComments></RecentComments>
        </div>
    );
};

export default RightContent;