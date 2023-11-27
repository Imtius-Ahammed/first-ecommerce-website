import React from 'react';
import useAdmin from '../../Hooks/useAdmin';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import UserDashboard from './UserDashboard/UserDashboard';

const Dashboard = () => {

    const [isAdmin] = useAdmin();
    return (
        <div>
            {
                isAdmin ?
                <AdminDashboard />
                :
                <UserDashboard />
            }
        </div>
    );
};

export default Dashboard;