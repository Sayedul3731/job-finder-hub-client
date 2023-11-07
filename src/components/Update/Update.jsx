import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import {useContext} from "react"


const Update = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <div className="bg-gradient-to-r from-sky-600 to-green-600 pb-10 pt-10 md:pt-7  p-1 md:p-24">
            <h1 className="text-4xl font-semibold text-center mb-10">Update Job</h1>

            <form >
                {/* form row  */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg">Job Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="category"  placeholder="Job Category" className="input input-bordered w-full md:w-full" />
                        <select  name="" id="">

                            <option value="On Site Job">On Site Job</option>
                            <option value="Remote Job">Remote Job</option>
                            <option value="Hybrid Job">Hybrid Job</option>
                            <option value="Part Time Job">Part Time Job</option>
                            <option value="Full Time Job">Full Time Job</option>
                            
                        </select>
                    </label>
                </div>
                {/* form row  */}
                <div className="md:flex gap-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={user ? user?.displayName : ''} placeholder="Logged User Name" className="input input-bordered w-full md:w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" defaultValue={user ? user?.email : ''} placeholder="Logged User Email" className="input input-bordered w-full md:w-full" />
                        </label>
                    </div>
                </div>

                {/* form row  */}
                <div className="md:flex gap-5">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg">Job Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Job Title" className="input input-bordered w-full md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg">Salary Range</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="salary" placeholder="Salary Range" className="input input-bordered w-full md:w-full" />
                        </label>
                    </div>
                </div>
                {/* form row  */}
                <div className="md:flex gap-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Job Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Job Description" className="input input-bordered w-full md:w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Job Posting Date</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="jobPostingDate" placeholder="Job Posting Date" className="input input-bordered w-full md:w-full" />
                        </label>
                    </div>
                </div>
                {/* form row  */}
                <div className="md:flex gap-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Application Deadline</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="deadline" placeholder="Applicants Deadline" className="input input-bordered w-full md:w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Applicants Number</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="applicants" placeholder="Job Applicants Number" className="input input-bordered w-full md:w-full" />
                        </label>
                    </div>
                </div>
                {/* form row  */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text text-lg">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Job Banner photoURL" className="input input-bordered w-full md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text text-lg">Logo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="logo" placeholder="Company LogoURL" className="input input-bordered w-full md:w-full" />
                        </label>
                    </div>
                </div>

                <input className="btn btn-block bg-sky-400 hover:bg-sky-500 text-white mt-10" type="submit" value="Add Job" />
            </form>
        </div>
        </div>
    );
};

export default Update;