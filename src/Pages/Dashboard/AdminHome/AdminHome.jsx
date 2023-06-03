import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaCreditCard, FaTruck, FaUsers } from "react-icons/fa";
// import { LuChefHat } from "react-icons/lu";
import { GiCook } from "react-icons/gi";


const AdminHome = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats')
            return res.data;
        }
    })
    console.log(stats)

    return (
        <div>
            <h1 className="text-4xl text-center mb-5">Hi, Welcome <span className="font-bold">{user?.displayName}</span></h1>
            <div className="stats shadow">
                <div className="stat items-center bg-gradient-to-r from-purple-500 to bg-purple-100 text-white">
                    <div className="flex items-center gap-5">
                        <div className="stat-figure text-secondary">
                            <FaCreditCard className="text-5xl text-white"></FaCreditCard>
                        </div>
                        <div>
                            <div className="font-semibold">Revenue</div>
                            <div className="stat-value">${stats.revenue}</div>
                        </div>
                    </div>
                </div>
                <div className="stat items-center bg-gradient-to-r from-amber-500 to bg-amber-100 text-white">
                    <div className="flex items-center gap-5">
                        <div className="stat-figure text-secondary">
                            <FaUsers className="text-5xl text-white"></FaUsers>
                        </div>
                        <div>
                            <div className="font-semibold">Customers</div>
                            <div className="stat-value">{stats.users}</div>
                        </div>
                    </div>
                </div>
                <div className="stat items-center bg-gradient-to-r from-pink-500 to bg-pink-100 text-white">
                    <div className="flex items-center gap-5">
                        <div className="stat-figure text-secondary">
                            <GiCook className="text-5xl text-white"></GiCook>
                        </div>
                        <div>
                            <div className="font-semibold">Menu Items</div>
                            <div className="stat-value">{stats.products}</div>
                        </div>
                    </div>
                </div>
                <div className="stat items-center bg-gradient-to-r from-sky-500 to bg-sky-100 text-white">
                    <div className="flex items-center gap-5">
                        <div className="stat-figure text-secondary">
                            <FaTruck className="text-5xl text-white"></FaTruck>
                        </div>
                        <div>
                            <div className="font-semibold">Orders</div>
                            <div className="stat-value">{stats.orders}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;