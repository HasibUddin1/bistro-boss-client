import { Link } from 'react-router-dom';
import signUpImage from '../../assets/others/authentication2.png'
import { useForm } from 'react-hook-form';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
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
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-500 font-semibold'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 8})} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <span className='text-red-500 font-semibold'>Password is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
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