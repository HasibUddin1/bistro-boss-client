import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";



const CheckoutForm = () => {

    const [cardError, setCardError] = useState('')

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError('')
            console.log(paymentMethod)
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
                    <button className="btn btn-primary w-full" type="submit" disabled={!stripe}>
                        Pay
                    </button>
                </div>
            </form>
            {cardError && <p className="text-red-600">{cardError}</p>}
        </>
    );
};

export default CheckoutForm;