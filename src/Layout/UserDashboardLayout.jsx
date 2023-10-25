import React from 'react';
import UserNavbar from '../Pages/UserDashboard/UserNavbar/UserNavbar';
import {GiHamburgerMenu} from '@react-icons/all-files/gi/GiHamburgerMenu';
import { Outlet } from 'react-router-dom';

const UserDashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content m-4 flex flex-col">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-ghost text-xl mt-3 lg:mt-0 lg:mr-0 mr-3 drawer-button lg:hidden"><GiHamburgerMenu /></label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <UserNavbar />
                </ul>
            </div>
        </div>
    );
};

export default UserDashboardLayout;