import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Secret/Secret";
import Dashboard from "../Layout/Dashboard/Dashboard";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AddReview from "../Pages/Dashboard/AddReview/AddReview";
import MyBooking from "../Pages/Dashboard/MyBooking/MyBooking";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'ourMenu',
                element: <Menu></Menu>
            },
            {
                path: 'ourShop/:category',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'reservation',
                element: <Reservation></Reservation>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'myCart',
                element: <MyCart></MyCart>
            },
            {
                path: 'addReview',
                element: <AddReview></AddReview>
            },
            {
                path: 'myBooking',
                element: <MyBooking></MyBooking>
            }
        ]
    }
])