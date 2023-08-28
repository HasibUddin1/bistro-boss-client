import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaCreditCard, FaTruck, FaUsers } from "react-icons/fa";
// import { LuChefHat } from "react-icons/lu";
import { GiCook } from "react-icons/gi";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, ResponsiveContainer, Legend } from 'recharts';
import { Helmet } from "react-helmet-async";



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

    const { data: chartData = [] } = useQuery({
        queryKey: ['chartData'],
        queryFn: async () => {
            const res = await axiosSecure('/order-stats')
            return res.data;
        }
    })

    // console.log(stats)
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


    // bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent,}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Admin Home</title>
            </Helmet>
            <h1 className="text-4xl text-center mb-5">Hi, Welcome <span className="font-bold">{user?.displayName}</span></h1>
            <div className="lg:flex shadow">
                <div className="lg:w-1/4 p-4 items-center bg-gradient-to-r from-purple-500 to bg-purple-100 text-white">
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
                <div className="lg:w-1/4 p-4 items-center bg-gradient-to-r from-amber-500 to bg-amber-100 text-white">
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
                <div className="lg:w-1/4 p-4 items-center bg-gradient-to-r from-pink-500 to bg-pink-100 text-white">
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
                <div className="lg:w-1/4 p-4 items-center bg-gradient-to-r from-sky-500 to bg-sky-100 text-white">
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
            <div className="lg:flex">
                <div className="lg:w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="totalPrice" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="lg:w-1/2">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Legend></Legend>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="totalQuantity"
                            >
                                {chartData.map((entry, index) => (
                                    <Cell name={entry.category} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;