import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";


const MyCart = () => {

    const [cart] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0)

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className="flex gap-10 font-semibold mb-5">
                <h3 className="text-3xl">Total Orders: {cart.length}</h3>
                <h3 className="text-3xl">Total Price: ${parseInt(total).toFixed(2)}</h3>
                <button className="btn btn-warning btn-sm">Pay</button>
            </div>
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.slice(0, 6).map((item, index )=> <tr
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
                                <td className="text-end">${item.price}</td>
                                <th>
                                    <button className="btn btn-ghost bg-red-600 text-white font-bold hover:text-black"><FaTrashAlt></FaTrashAlt> </button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;