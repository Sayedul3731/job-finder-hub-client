import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import {useContext} from "react"
import {useLoaderData} from "react-router-dom"
import Swal from "sweetalert2";


const Update = () => {
    const {user} = useContext(AuthContext)

    const job = useLoaderData()
    const {_id, category, title, salary, description, jobPostingDate, deadline, applicants, photo, logo} = job;

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        console.log(name);
        const email = form.email.value;
        const category = form.category.value;
        const title = form.title.value;
        const salary = form.salary.value;
        const description = form.description.value;
        const jobPostingDate = form.jobPostingDate.value;
        const deadline = form.deadline.value;
        const applicants = form.applicants.value;
        const photo = form.photo.value;
        const logo = form.logo.value;
        const updateJob = { name,email, category, title, salary, description, jobPostingDate, deadline, applicants: parseInt(applicants), logo, photo };
        console.log(updateJob);
        axios.patch(`https://job-finder-hub-server.vercel.app/update/${_id}`, updateJob)
        .then(res => {
            console.log(res.data);
            if(res?.data?.modifiedCount > 0){
                Swal.fire(
                    'Success!',
                    'Job Updated Successfully.',
                    'success'
                )
            }
        })
        console.log('clicked update button');
    }
    return (
        <div>
            <div className="bg-gradient-to-r from-green-600 to-sky-600 pb-10 pt-10 md:pt-7  p-1 md:p-24">
            <h1 className="text-4xl font-semibold text-center mb-10">Update Job</h1>

            <form onSubmit={handleUpdate}>
                {/* form row  */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg">Job Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="category" defaultValue={category}  placeholder="Job Category" className="input input-bordered w-full md:w-full" />
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
                            <input type="text" name="title" defaultValue={title} placeholder="Job Title" className="input input-bordered w-full md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg">Salary Range</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="salary" defaultValue={salary} placeholder="Salary Range" className="input input-bordered w-full md:w-full" />
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
                            <input type="text" name="description" defaultValue={description} placeholder="Job Description" className="input input-bordered w-full md:w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Job Posting Date</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="jobPostingDate" defaultValue={jobPostingDate} placeholder="Job Posting Date" className="input input-bordered w-full md:w-full" />
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
                            <input type="date" name="deadline" defaultValue={deadline} placeholder="Applicants Deadline" className="input input-bordered w-full md:w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Applicants Number</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="applicants" defaultValue={applicants} placeholder="Job Applicants Number" className="input input-bordered w-full md:w-full" />
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
                            <input type="text" name="photo" defaultValue={photo} placeholder="Job Banner photoURL" className="input input-bordered w-full md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text text-lg">Logo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="logo" defaultValue={logo} placeholder="Company LogoURL" className="input input-bordered w-full md:w-full" />
                        </label>
                    </div>
                </div>

                <input  className="btn btn-block bg-green-400 hover:bg-sky-500 text-white mt-10" type="submit" value="Update Job" />
            </form>
        </div>
        </div>
    );
};

export default Update;