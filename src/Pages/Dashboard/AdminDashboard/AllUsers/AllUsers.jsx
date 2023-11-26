import React from 'react';
import useAllUsers from '../../../../Hooks/useAllUsers';
import { MdDelete } from '@react-icons/all-files/md/MdDelete';
import { RiAdminFill } from '@react-icons/all-files/ri/RiAdminFill';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const [users, refetch] = useAllUsers();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = (id) => {
        console.log(id);
        axiosSecure.delete(`/users/${id}`)
        .then(res => {
            if(res.data.deletedCount > 0){
                refetch();
                Swal.fire({
                    icon: 'success',
                    title: 'User Deleted',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    return (
        <div className="overflow-x-auto shadow-xl">
            <table className="table">
                <thead className='text-center bg-black text-white'>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        users.map((user, index) => {
                            const { _id, name, email } = user;
                            return <tr key={_id} className="hover">
                                <th>{index + 1}</th>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td className='flex items-center justify-center'>
                                    <button>
                                        <RiAdminFill className='text-2xl font-bold text-orange-600 hover:text-black' />
                                    </button>
                                    <div className="divider divider-horizontal"></div>
                                    <button onClick={() => handleDelete(_id)}>
                                        <MdDelete className='text-2xl font-bold text-orange-600 hover:text-black' />
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;