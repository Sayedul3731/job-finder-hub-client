// import axios from "axios";
// import { useEffect } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import axios from "axios"
import Swal from "sweetalert2";



const JobDetails = () => {

    const { user } = useContext(AuthContext)



    const job = useLoaderData()
    console.log(job);
    const { logo, title, description, salary, applicants,photo } = job;

    const handleSubmit = () => {
        console.log('clicked on the submit button');
        const { deadline } = job;
        const dateObject = new Date(deadline);
        const jobDeadline = dateObject.getTime()
        console.log(jobDeadline);
        const currentDate = Date.now()
        console.log(currentDate);
        if (jobDeadline >= currentDate) {
            axios.post('http://localhost:5000/allJobs/:id', job)
                .then(res => {
                    console.log(res.data)
                    if(res?.data?.insertedId){
                        Swal.fire(
                            'Success!',
                            'Submitted Successfully.',
                            'success'
                        )
                    }
                })
        }else{
            Swal.fire(
                'ERROR!',
                'Deadline Is Over.',
                'error'
            )
        }



    }
    return (
        <div className="py-10">
            <div className="min-h-screen bg-base-100 shadow-sm border border-sky-500 w-5/6 mx-auto">
                <div className=" flex justify-center  py-3">
                    <img className="w-[100px] h-[100px] rounded-full" src={logo} alt="" />
                </div>
                {/* <figure><img className="h-[500px] w-full" src="/banner.jpg" alt="Shoes" /></figure> */}
                <div className="h-[328px] mt-3 flex items-center bg-gradient-to-r from-sky-400">
                    <div className=" w-1/2 pl-20">
                        <p className="text-5xl font-semibold mb-2">WE ARE <br /> HIRING...</p>
                        <p className="text-xl font-semibold">We are looking for talented to fill these vacancies.</p>
                    </div>
                    <div className=" h-full">
                        <img className="h-full object-cover" src={photo} alt="" />
                    </div>
                </div>
                <div className="card-body mt-5">
                    <h2 className="card-title">position: {title}</h2>
                    <p><span className="text-xl font-semibold">Description:</span> {description}</p>
                    <p className="text-xl font-semibold">Salary Range: {salary}</p>
                    <p className="text-xl font-semibold">Applicants: {applicants}</p>
                    <div className="card-actions justify-end mt-5">
                        <button onClick={() => document.getElementById('modal').showModal()} className="px-10 py-3 text-2xl font-semibold text-white bg-sky-400">Apply</button>

                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <dialog id="modal" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <form>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">User Name</span>
                                        </label>
                                        <input type="text" defaultValue={user ? user?.displayName : ' '} placeholder="User Name" name="name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Email</span>
                                        </label>
                                        <input type="email" defaultValue={user ? user?.email : ' '} placeholder="email" name="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Resume</span>
                                        </label>
                                        <input type="text" placeholder="Resume Link Push Here..." name="resume" className="input input-bordered" required />
                                    </div>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button onClick={handleSubmit} className="btn">Submit</button>
                                        </form>
                                    </div>
                                </form>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;