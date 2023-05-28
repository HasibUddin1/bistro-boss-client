import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import './Login.css'
import loginImage from '../../assets/others/authentication2.png'
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {

    const captchaRef = useRef(null)

    const [disabled, setDisabled] = useState(true)

    const {signIn} = useContext(AuthContext)

    const location = useLocation()
    // console.log(location)
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser)
            Swal.fire({
                title: 'User has been successfully logged in',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleValidateCaptcha = () => {
        const userCaptchaValue = captchaRef.current.value
        if (validateCaptcha(userCaptchaValue)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <div className='login-page-background h-screen'>
            <div className="hero py-20 px-20">
                <div className="drop-shadow-2xl bg-base-100 flex rounded-xl rounded-s-xl login-page-background w-9/12 mx-auto">
                    <div className='text-center w-1/2 h-1/2 my-auto'>
                        <img className='rounded-xl' src={loginImage} alt="" />
                    </div>
                    <div className='w-1/2 py-5'>
                        <h2 className='text-center text-3xl font-bold'>Login</h2>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" ref={captchaRef} name="captcha" placeholder="Type the text above" className="input input-bordered" />
                                <label className="label">
                                    <p onClick={handleValidateCaptcha} className="btn btn-outline btn-xs">Validate</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className={disabled ? 'bg-[#D1A054] bg-opacity-70 px-6 py-2 rounded-xl text-white' : 'bg-[#D1A054] px-6 py-2 rounded-xl text-white hover:bg-yellow-600 ease-out duration-200 cursor-pointer'} type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center text-[#D1A054]'>New Here? <Link className='font-bold' to='/signUp'>Please Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;