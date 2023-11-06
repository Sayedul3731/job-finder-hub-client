import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";


const AddAJob = () => {

    const { user } = useContext(AuthContext)
    console.log(user);

    const handleAddJob = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const title = form.title.value;
        const salary = form.salary.value;
        const description = form.description.value;
        const jobPostingDate = form.jobPostingDate.value;
        const deadline = form.deadline.value;
        const applicants = form.applicants.value;
        const photo = form.photo.value;
        const logo = form.logo.value;
        const newJob = { name, category, title, salary, description, jobPostingDate, deadline, applicants, logo, photo };
        console.log(newJob);
        fetch('http://localhost:5000/addAJob', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Success!',
                        'Job added Successfully.',
                        'success'
                    )
                }
            })
    }
    return (
        <div className="bg-gradient-to-r from-sky-600 to-green-600 pb-10 pt-10 md:pt-7  p-1 md:p-24">
            <h1 className="text-4xl font-semibold text-center mb-10">Add A Job</h1>

            <form onSubmit={handleAddJob}>
                {/* form row  */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg">Job Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="category" placeholder="On Site Job/Remote Job/Hybrid Job/Part Time Job/Full-Time Job/Contract Job" className="input input-bordered w-full md:w-full" />
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
    );
};

export default AddAJob;