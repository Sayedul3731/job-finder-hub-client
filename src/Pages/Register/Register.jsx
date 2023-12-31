import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useContext, useState } from "react"
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import axios from "axios";


const Register = () => {
    const [show, setShow] = useState(false)
    const { userCreate } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, photo, email, password }
        console.log(user);
        if(!/(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}/.test(password)){
            Swal.fire(
                'Oh!',
                'Password Should be at least 6 character, a capital letter and a special character.',
                'error'
            )
            return;
        }
        userCreate(email, password)
            .then(res => {
                console.log(res.user);
                Swal.fire(
                    'Succes!',
                    'User Created Successfully.',
                    'success'
                )
                const user = {email: email}
                axios.post('http://localhost:5000/jwt', user, {withCredentials: true} )
                .then(res => {
                    console.log(res.data);
                })
                navigate( location.state ? location.state : '/')
                updateProfile( res.user,{
                    displayName: name,
                    photoURL: photo
                })
                    .then( () => console.log('profile updated'))
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="lg:pt-40 min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-white font-bold">Register now!</h1>
                </div>
                <div className="relative rounded-sm border-r border-l px-5 mt-10 w-full md:w-1/2">
                    <form onSubmit={handleRegister} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text  text-lg">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text  text-lg">Photo</span>
                            </label>
                            <input type="text" placeholder="photoURL" name="photo" className="input input-bordered" required />
                        </div>
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
                            <button type="submit" className="btn bg-sky-500 text-white hover:text-black">Register</button>
                        </div>
                    </form>
                    <p className="mb-4 text-center text-white">Already Have an Account? Please <Link to="/login"><span className="text-lg font-semibold text-yellow-400">Login</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;