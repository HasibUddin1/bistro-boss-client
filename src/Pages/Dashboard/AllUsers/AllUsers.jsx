import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })

    const handleDelete = user => {
        console.log(user)
    }

    const handleMakeAdmin = user => {
        // console.log(user)
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="w-full h-full flex items-center bg-slate-200 p-52">
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className="w-9/12 mx-auto bg-white p-10 rounded-xl">
                <h1 className="text-4xl text-center my-4">Total Users: {users.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr
                                    key={user._id}
                                >
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{
                                        user.role === 'admin' ?
                                            'admin' :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-[#D1A054] text-white font-bold hover:text-black"><FaUserShield></FaUserShield> </button>
                                    }</td>
                                    <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600 text-white font-bold hover:text-black"><FaTrashAlt></FaTrashAlt> </button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;