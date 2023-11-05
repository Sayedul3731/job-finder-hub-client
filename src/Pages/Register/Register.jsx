import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="lg:pt-40 min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-white font-bold">Register now!</h1>
                </div>
                <div className="rounded-sm border-r border-l px-5 mt-10 w-1/2">
                    <form className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text  text-lg">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text  text-lg">Photo</span>
                            </label>
                            <input type="text" placeholder="photoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-sky-500 text-white hover:text-black">Register</button>
                        </div>
                    </form>
                    <p className="mb-4 text-center text-white">Already Have an Account? Please <Link to="/login"><span className="text-lg font-semibold text-yellow-400">Login</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;