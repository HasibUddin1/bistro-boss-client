import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet-async";


const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Key)

const Reservation = () => {
    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | Reservation</title>
            </Helmet>
            <div className="w-1/4 mx-auto">
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Reservation;