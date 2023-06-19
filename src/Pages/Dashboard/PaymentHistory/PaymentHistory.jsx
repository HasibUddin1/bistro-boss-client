import { useEffect } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const PaymentHistory = () => {

    const [axiosSecure] = useAxiosSecure()

    const { user } = useContext(AuthContext)

    const [payments, setPayments] = useState([])

    useEffect(() => {
        axiosSecure.get(`/payments/${user?.email}`)
            .then(res => {
                setPayments(res.data)
            })
    }, [axiosSecure, user])

    return (
        <div className="w-full h-full flex items-center bg-slate-200 p-52">
            <Helmet>
                <title>Bistro Boss | Payment History</title>
            </Helmet>
            <div className="w-9/12 mx-auto bg-white p-10 rounded-xl">
                <h1 className="text-4xl text-center my-4">Total Payments: {payments.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-center">Email</th>
                                <th className="text-center">Category</th>
                                <th className="text-center">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((payment) => <tr
                                    key={payment._id}
                                >
                                    <td className="text-center">{payment.email}</td>
                                    <td className="text-center">Food Order</td>
                                    <td className="text-center">${payment.price}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;