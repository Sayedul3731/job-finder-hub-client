import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react"
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";



const Login = () => {
    const [show, setShow] = useState(false)

    const { login, logInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
            .then(res => {
                console.log(res.user);
                Swal.fire(
                    'Succes!',
                    'User Logged In Successfully.',
                    'success'
                ).then(result => {
                    if(result.isConfirmed){
                        const user = {email: email}
                        axios.post('http://localhost:5000/jwt', user, {withCredentials: true} )
                        .then(res => {
                            console.log(res.data);
                        })

                        navigate( location.state ? location.state : '/')
                    }
                })
            })
            .catch(error => {
                console.error(error);
                Swal.fire(
                    'ERROR!',
                    `${error.message}`,
                    'error'
                )
            })

    }

    const signInWithGoogle = () => {
        logInWithGoogle()
            .then(res => {
                console.log(res.user);
                Swal.fire(
                    'Succes!',
                    'User Logged In Successfully.',
                    'success'
                )
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="lg:pt-40 min-h-screen bg-gradient-to-r from-blue-500 to-sky-500">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-white font-bold">Login now!</h1>
                </div>
                <div className="rounded-sm border-t border-b px-5 mt-10 w-full md:w-1/2">
                    <form onSubmit={handleLogin} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Password</span>
                            </label>
                            <input type={show ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />
                            <div onClick={() => setShow(!show)} className="absolute ml-[276px] md:ml-[302px] lg:ml-[550px] mt-[62px] cursor-pointer">
                                {
                                    show ? <BsFillEyeSlashFill></BsFillEyeSlashFill> : <BsFillEyeFill></BsFillEyeFill>
                                }
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn text-xl bg-sky-500 text-white hover:text-black">Login</button>
                        </div>
                    </form>
                    <div onClick={signInWithGoogle} className="border flex justify-center items-center bg-sky-500 text-white gap-5 mt-5 text-center py-2 text-xl font-semibold cursor-pointer">
                        <span><FcGoogle></FcGoogle></span>
                        <p>Login With Google</p>
                    </div>
                    <p className="mb-4 text-center text-white">Do not Have an Account? Please <Link to="/register"><span className="text-lg font-semibold text-yellow-400">Register</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;