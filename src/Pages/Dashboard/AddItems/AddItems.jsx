import { Helmet } from "react-helmet-async";
import { useForm } from 'react-hook-form';
import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AddItems = () => {
    const [axiosSecure] = useAxiosSecure()

    const imageHostingToken = import.meta.env.VITE_Image_Token_Key
    // console.log(imageHostingToken)

    const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)

        const formData = new FormData()
        formData.append('image', data.image[0])

        fetch(imageHostingURL, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                // console.log(imageResponse)
                if (imageResponse.success) {
                    const newFormData = {
                        name: data.name,
                        category: data.category,
                        price: parseFloat(data.price),
                        recipe: data.recipe,
                        image: imageResponse.data.display_url
                    }
                    // console.log(newFormData)
                    axiosSecure.post('/menu', newFormData)
                        .then(data => {
                            console.log(data.data)
                            if (data.data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Item has been added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    };

    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | Add Items</title>
            </Helmet>
            <SectionTitle subHeading="What's New?" heading="Add An Item"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="w-9/12 mx-auto p-10 bg-slate-200 rounded-xl">
                <div className="mb-5">
                    <label className="label label-text">Recipe Name*</label>
                    <input type="text" name="name" {...register('name', { required: true })} placeholder="Recipe Name" className="input input-bordered w-full" />
                </div>
                <div className="flex justify-between gap-6 mb-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select {...register('category', { required: true })} name="category" className="select select-bordered w-full">
                            <option defaultChecked>Pick one</option>
                            <option>Salad</option>
                            <option>Pizza</option>
                            <option>Soups</option>
                            <option>Desserts</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div className="w-1/2">
                        <label className="label label-text">Price*</label>
                        <input type="number" {...register('price', { required: true })} name="price" placeholder="Price" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control mb-5">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea {...register('recipe', { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                </div>
                <div className="form-control w-full max-w-xs mb-5">
                    <input type="file" {...register('image', { required: true })} className="file-input bg-slate-300 file-input-bordered w-full max-w-xs" />
                </div>
                <input className="bg-[#D1A054] text-white px-6 py-2 rounded-xl cursor-pointer hover:bg-orange-600 ease-in-out duration-200" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItems;