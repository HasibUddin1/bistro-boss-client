import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from '@tanstack/react-query'

const useCart = () => {
    const { user } = useContext(AuthContext)
    const token = localStorage.getItem('access-token')

    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/cart?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return response.json()
        },
    })
    return [cart, refetch]
}

export default useCart;