import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";


const MyCart = () => {

    const [cart] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0)

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div>
                <h3 className="text-3xl">Total Orders: {cart.length}</h3>
                <h3 className="text-3xl">Total Price: ${parseInt(total)}</h3>
                <button className="btn btn-warning btn-sm">Pay</button>
            </div>
        </div>
    );
};

export default MyCart;