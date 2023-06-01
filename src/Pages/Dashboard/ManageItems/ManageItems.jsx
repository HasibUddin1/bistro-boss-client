import { Helmet } from "react-helmet-async";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// pagination css
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ManageItems = () => {

    const [axiosSecure] = useAxiosSecure()


    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    const [menu, , refetch] = useMenu()

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full h-full bg-slate-200">
            <Helmet>
                <title>Bistro Boss | Manage Items</title>
            </Helmet>
            <SectionTitle subHeading="Hurry Up!" heading="Manage All Items"></SectionTitle>
            <div className="w-9/12 mx-auto">
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                    onSlideChange={() => {
                        // console.log(swiper.realIndex)
                    }}
                >
                    <SwiperSlide>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Item Image</th>
                                        <th>Item Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        menu.slice(0, 6).map((item, index) => <tr
                                            key={item._id}
                                        >
                                            <td>
                                                {index + 1}
                                            </td>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>${item.price}</td>
                                            <th>
                                                <button className="btn btn-ghost bg-[#D1A054] text-white font-bold hover:text-black"><FaRegEdit></FaRegEdit> </button>
                                            </th>
                                            <th>
                                                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white font-bold hover:text-black"><FaTrashAlt></FaTrashAlt> </button>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </SwiperSlide>
                    {menu.length > 6 && <SwiperSlide>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Item Image</th>
                                        <th>Item Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        menu.slice(6, 12).map((item, index) => <tr
                                            key={item._id}
                                        >
                                            <td>
                                                {index + 7}
                                            </td>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>${item.price}</td>
                                            <th>
                                                <button className="btn btn-ghost bg-[#D1A054] text-white font-bold hover:text-black"><FaRegEdit></FaRegEdit> </button>
                                            </th>
                                            <th>
                                                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white font-bold hover:text-black"><FaTrashAlt></FaTrashAlt> </button>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </SwiperSlide>}
                    {menu.length > 12 && <SwiperSlide>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Item Image</th>
                                        <th>Item Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        menu.slice(12, 18).map((item, index) => <tr
                                            key={item._id}
                                        >
                                            <td>
                                                {index + 13}
                                            </td>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>${item.price}</td>
                                            <th>
                                                <button className="btn btn-ghost bg-[#D1A054] text-white font-bold hover:text-black"><FaRegEdit></FaRegEdit> </button>
                                            </th>
                                            <th>
                                                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white font-bold hover:text-black"><FaTrashAlt></FaTrashAlt> </button>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </SwiperSlide>}
                    {menu.length > 18 && <SwiperSlide>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Item Image</th>
                                        <th>Item Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        menu.slice(18, 24).map((item, index) => <tr
                                            key={item._id}
                                        >
                                            <td>
                                                {index + 19}
                                            </td>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>${item.price}</td>
                                            <th>
                                                <button className="btn btn-ghost bg-[#D1A054] text-white font-bold hover:text-black"><FaRegEdit></FaRegEdit> </button>
                                            </th>
                                            <th>
                                                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white font-bold hover:text-black"><FaTrashAlt></FaTrashAlt> </button>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </SwiperSlide>}
                    {menu.length > 24 && <SwiperSlide>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Item Image</th>
                                        <th>Item Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        menu.slice(24, 30).map((item, index) => <tr
                                            key={item._id}
                                        >
                                            <td>
                                                {index + 25}
                                            </td>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>${item.price}</td>
                                            <th>
                                                <button className="btn btn-ghost bg-[#D1A054] text-white font-bold hover:text-black"><FaRegEdit></FaRegEdit> </button>
                                            </th>
                                            <th>
                                                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white font-bold hover:text-black"><FaTrashAlt></FaTrashAlt> </button>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </SwiperSlide>}
                    {menu.length > 30 && <SwiperSlide>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Item Image</th>
                                        <th>Item Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        menu.slice(30, 36).map((item, index) => <tr
                                            key={item._id}
                                        >
                                            <td>
                                                {index + 31}
                                            </td>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>${item.price}</td>
                                            <th>
                                                <button className="btn btn-ghost bg-[#D1A054] text-white font-bold hover:text-black"><FaRegEdit></FaRegEdit> </button>
                                            </th>
                                            <th>
                                                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white font-bold hover:text-black"><FaTrashAlt></FaTrashAlt> </button>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </SwiperSlide>}
                    {menu.length > 36 && <SwiperSlide>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Item Image</th>
                                        <th>Item Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        menu.slice(36, 42).map((item, index) => <tr
                                            key={item._id}
                                        >
                                            <td>
                                                {index + 37}
                                            </td>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>${item.price}</td>
                                            <th>
                                                <button className="btn btn-ghost bg-[#D1A054] text-white font-bold hover:text-black"><FaRegEdit></FaRegEdit> </button>
                                            </th>
                                            <th>
                                                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white font-bold hover:text-black"><FaTrashAlt></FaTrashAlt> </button>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </SwiperSlide>}
                    {menu.length > 42 && <SwiperSlide>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Item Image</th>
                                        <th>Item Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        menu.slice(42, 48).map((item, index) => <tr
                                            key={item._id}
                                        >
                                            <td>
                                                {index + 43}
                                            </td>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>${item.price}</td>
                                            <th>
                                                <button className="btn btn-ghost bg-[#D1A054] text-white font-bold hover:text-black"><FaRegEdit></FaRegEdit> </button>
                                            </th>
                                            <th>
                                                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white font-bold hover:text-black"><FaTrashAlt></FaTrashAlt> </button>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </SwiperSlide>}
                    {menu.length > 48 && <SwiperSlide>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Item Image</th>
                                        <th>Item Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        menu.slice(48, 54).map((item, index) => <tr
                                            key={item._id}
                                        >
                                            <td>
                                                {index + 49}
                                            </td>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>${item.price}</td>
                                            <th>
                                                <button className="btn btn-ghost bg-[#D1A054] text-white font-bold hover:text-black"><FaRegEdit></FaRegEdit> </button>
                                            </th>
                                            <th>
                                                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white font-bold hover:text-black"><FaTrashAlt></FaTrashAlt> </button>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </SwiperSlide>}
                    {menu.length > 54 && <SwiperSlide>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Item Image</th>
                                        <th>Item Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        menu.slice(54, 60).map((item, index) => <tr
                                            key={item._id}
                                        >
                                            <td>
                                                {index + 55}
                                            </td>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>${item.price}</td>
                                            <th>
                                                <button className="btn btn-ghost bg-[#D1A054] text-white font-bold hover:text-black"><FaRegEdit></FaRegEdit> </button>
                                            </th>
                                            <th>
                                                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white font-bold hover:text-black"><FaTrashAlt></FaTrashAlt> </button>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </SwiperSlide>}
                    {menu.length > 60 && <SwiperSlide>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Item Image</th>
                                        <th>Item Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        menu.slice(60, 66).map((item, index) => <tr
                                            key={item._id}
                                        >
                                            <td>
                                                {index + 61}
                                            </td>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>${item.price}</td>
                                            <th>
                                                <button className="btn btn-ghost bg-[#D1A054] text-white font-bold hover:text-black"><FaRegEdit></FaRegEdit> </button>
                                            </th>
                                            <th>
                                                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white font-bold hover:text-black"><FaTrashAlt></FaTrashAlt> </button>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </SwiperSlide>}
                </Swiper>
            </div>
        </div>
    );
};

export default ManageItems;