import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from '../../../hooks/useAdmin'
import Swal from "sweetalert2";


const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext)

    const [cart] = useCart()
    const [isAdmin] = useAdmin()


    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    '',
                    'You successfully logged out',
                    'success'
                )
            })
            .catch(error => {
                console.log(error)
            })
    }

    const navOptions = <>
        <li><Link className="text-black lg:text-white" to='/'>Home</Link></li>
        <li><Link className="text-black lg:text-white" to='/ourMenu'>Our Menu</Link></li>
        <li><Link className="text-black lg:text-white" to='/ourShop/salad'>Our Shop</Link></li>
        <li><Link className="text-black lg:text-white" to={isAdmin ? '/dashboard/adminHome' : '/dashboard/myCart'}>Dashboard</Link></li>
        <li><Link className="text-black lg:text-white" to='/dashboard/myCart'>
            <div className="indicator">
                <span className="indicator-item badge badge-secondary">+{cart?.length}</span>
                <button className="btn bg-transparent border-none text-xl"><FaShoppingCart></FaShoppingCart></button>
            </div>
        </Link></li>
        {user ?
            <><button onClick={handleLogOut} className="btn btn-ghost text-black lg:text-white">LogOut</button></> :
            <li><Link className="text-black lg:text-white" to='/login'>Login</Link></li>
        }
    </>

    return (
        <div>
            <div className="navbar flex justify-between fixed z-10 bg-opacity-30 bg-black text-white px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 flex items-center">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;