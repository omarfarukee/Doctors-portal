import { useQuery } from '@tanstack/react-query';
import React from 'react';
// import toast from 'react-hot-toast';
import toast, { Toaster } from 'react-hot-toast';

const AllUsers = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'], 
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/users')
            const data =await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method : 'PUT', 
            headers: {
                authorization : `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                toast.success('make admin successfully')
                refetch()
            }
        })
    }
    return (
        <div>
            <h1>all users</h1>
            <div className="overflow-x-auto">
  <table className="table w-full"><thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>

        {
            users.map((user, index) => 
        <tr>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make admin</button>} <Toaster></Toaster></td>
            <td><button className='btn btn-xs btn-danger'>Delete</button></td>
          </tr>
            )
        }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;