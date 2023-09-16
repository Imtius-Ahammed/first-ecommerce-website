import React from 'react';
import { Link } from 'react-router-dom';

const RecentComments = () => {
    return (
        <div className='p-2 mb-2'>
            <h1 className='font-medium text-xl font-sans'>Recent Comments</h1>
            <div className='divider'></div>
            <div className='flex flex-col gap-4'>
                <Link className='text-slate-500'>Peter Giroud on Natus erro at congue massa</Link>
                <Link className='text-slate-500'>Peter Giroud on Natus erro at congue massa</Link>
                <Link className='text-slate-500'>Peter Giroud on Natus erro at congue massa</Link>
                <Link className='text-slate-500'>Peter Giroud on Natus erro at congue massa</Link>
                <Link className='text-slate-500'>Peter Giroud on Natus erro at congue massa</Link>
            
            </div>
        </div>
    );
};

export default RecentComments;