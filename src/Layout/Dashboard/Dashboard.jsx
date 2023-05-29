import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaHome, FaCalendar } from 'react-icons/fa';
import { TbStarsFilled } from "react-icons/tb";
import { BsFillCalendarCheckFill } from "react-icons/bs";


const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='/dashboard/userHome'><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar> Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/paymentHistory'><FaWallet></FaWallet> Payment History</NavLink></li>
                    <li><NavLink to='/dashboard/myCart'><FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
                    <li><NavLink to='/dashboard/addReview'><TbStarsFilled></TbStarsFilled> Add Review</NavLink></li>
                    <li><NavLink to='/dashboard/myBooking'><BsFillCalendarCheckFill></BsFillCalendarCheckFill> My Booking</NavLink></li>
                    <hr />
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/ourMenu'>Menu</NavLink></li>
                    <li><NavLink to='/shop'>Shop</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;