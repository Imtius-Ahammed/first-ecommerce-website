import React from 'react';

const Dashboard = () => {

    const isAdmin = true;

    return (
        <div>
            {
                isAdmin ?
                'Admin Dashboard'
                :
                'User Dashboard'
            }
        </div>
    );
};

export default Dashboard;