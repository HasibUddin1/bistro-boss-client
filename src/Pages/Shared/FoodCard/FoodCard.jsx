import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";


const FoodCard = ({ item }) => {

    const { name, image, recipe, price, _id } = item
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const [,refetch] = useCart()

    const handleAddToCart = item => {
        console.log(item)


        if (user && user.email) {
            const orderItem = {
                itemId: _id,
                name,
                image,
                price,
                email: user.email
            }
            fetch('https://bistro-boss-server-dusky.vercel.app/cart', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            title: 'Success',
                            text: 'Your Item has been added to the cart',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: '',
                text: "You must login to add items to cart",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p className="bg-slate-900 text-white absolute top-0 right-0 mr-4 mt-4 px-4 py-2 rounded-xl">${price}</p>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-orange-400 border-b-4 text-orange-400 bg-slate-100 mt-5">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;