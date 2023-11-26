import React from 'react';
import useAllUsers from '../../../../Hooks/useAllUsers';

const AllUsers = () => {
    const [users] = useAllUsers();

    return (
        <div>
            {users.length}
        </div>
    );
};

export default AllUsers;