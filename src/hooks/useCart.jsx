import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    const { user, loading } = useContext(AuthContext)
    // const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure()

    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const response = await fetch(`https://bistro-boss-server-dusky.vercel.app/cart?email=${user?.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return response.json()
        // },
        queryFn: async () => {
            const response = await axiosSecure(`/cart?email=${user?.email}`)

            return response.data;
        },
    })
    return [cart, refetch]
}

export default useCart;