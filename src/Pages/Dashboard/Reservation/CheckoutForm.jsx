import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";




const CheckoutForm = ({ cart, price }) => {
    // console.log(price)

    const [cardError, setCardError] = useState('')

    const [axiosSecure] = useAxiosSecure()

    const { user } = useContext(AuthContext)

    const stripe = useStripe()
    const elements = useElements()

    const [clientSecret, setClientSecret] = useState('')
    // console.log(clientSecret)
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')

    useEffect(() => {
        // console.log(price)
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError('')
            // console.log(paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'unknown'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError)
        }

        console.log('paymentIntent', paymentIntent)

        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            const paymentInfo = {
                name: user?.displayName,
                email: user?.email,
                transactionId: paymentIntent.id,
                quantity: cart.length,
                date: new Date(),
                price,
                status: 'service pending',
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.itemId),
                itemsName: cart.map(item => item.name)
            }
            axiosSecure.post('/payments', paymentInfo)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    // display sweet alert
                }
            })
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    className="border-2 p-4"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="w-9/12 mx-auto mt-5">
                    <button className="btn btn-primary w-full" type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </div>
            </form>
            {cardError && <p className="text-red-600">{cardError}</p>}
            {transactionId && <p className="text-green-600">Transaction has been completed successfully. Your transaction Id:{transactionId}</p>}
        </>
    );
};

export default CheckoutForm;