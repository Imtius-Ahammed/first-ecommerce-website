import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = () => {
    return (
        <div>
            <li>
                <Link to='/dashboard'>Overview</Link>
            </li>
        </div>
    );
};

export default UserNavbar;