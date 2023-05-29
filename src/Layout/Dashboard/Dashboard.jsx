import { Link, Outlet } from "react-router-dom";
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
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/userHome'><FaHome></FaHome> User Home</Link></li>
                    <li><Link to='/reservation'><FaCalendar></FaCalendar> Reservation</Link></li>
                    <li><Link to='/paymentHistory'><FaWallet></FaWallet> Payment History</Link></li>
                    <li><Link to='/myCart'><FaShoppingCart></FaShoppingCart> My Cart</Link></li>
                    <li><Link to='/addReview'><TbStarsFilled></TbStarsFilled> Add Review</Link></li>
                    <li><Link to='/myBooking'><BsFillCalendarCheckFill></BsFillCalendarCheckFill> My Booking</Link></li>
                    <hr />
                    <li><Link>Home</Link></li>
                    <li><Link>Menu</Link></li>
                    <li><Link>Shop</Link></li>
                    <li><Link>Contact</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;