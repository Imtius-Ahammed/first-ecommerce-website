import React from 'react';
import UserNavbar from '../Pages/UserDashboard/UserNavbar/UserNavbar';
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';
import { Outlet } from 'react-router-dom';

const UserDashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open w-full lg:w-9/12 mx-auto">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content m-4 flex flex-col">
                <label htmlFor="my-drawer-2" className="py-4 text-xl flex justify-end mt-3 lg:mt-0 lg:mr-0 mr-3 drawer-button lg:hidden"><GiHamburgerMenu className='hover:text-orange-600' /></label>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-72 min-h-full">
                    <UserNavbar />
                </ul>
            </div>
        </div>
    );
};

export default UserDashboardLayout;