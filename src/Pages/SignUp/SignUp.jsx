import { Link, useNavigate } from 'react-router-dom';
import signUpImage from '../../assets/others/authentication2.png'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserInformation } = useContext(AuthContext)
    const navigate = useNavigate()


    const onSubmit = data => {
        // console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const registeredUser = result.user
                console.log(registeredUser)
                updateUserInformation(registeredUser, data.name, data.photoURL)
                    .then(() => {

                        const createdUser = { name: data.name, email: data.email }

                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                            },
                            body: JSON.stringify(createdUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        title: 'User Profile has been created successfully',
                                        showClass: {
                                            popup: 'animate__animated animate__fadeInDown'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOutUp'
                                        }

                                    })
                                    navigate('/')
                                }
                            })
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })
    };

    return (
        <div className='login-page-background h-screen'>
            <div className="hero py-20 px-20">
                <div className="drop-shadow-2xl bg-base-100 flex flex-row-reverse rounded-xl rounded-s-xl login-page-background w-9/12 mx-auto">
                    <div className='text-center w-1/2 h-1/2 my-auto'>
                        <img className='rounded-xl' src={signUpImage} alt="" />
                    </div>
                    <div className='w-1/2 py-5'>
                        <h2 className='text-center text-3xl font-bold'>Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='text-red-500 font-semibold'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-500 font-semibold'>Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-500 font-semibold'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 8,
                                    pattern: /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p role="alert" className='text-red-600 font-semibold'>Password is required</p>}
                                {errors.password?.type === 'minLength' && <p role="alert" className='text-red-600 font-semibold'>Password must be 8 characters long</p>}
                                {errors.password?.type === 'pattern' && <p role="alert" className='text-red-600 font-semibold'>Password must have at least one uppercase letter, one lowercase letter and one digit</p>}
                                <label className="label">

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="bg-[#D1A054] px-6 py-2 rounded-xl text-white hover:bg-yellow-600 ease-out duration-200 cursor-pointer" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-center text-[#D1A054]'>Already have an account? <Link className='font-bold' to='/login'>Please Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;