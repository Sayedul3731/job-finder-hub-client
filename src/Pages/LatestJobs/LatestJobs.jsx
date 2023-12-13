import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const LatestJobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/latestJobs')
            .then(res => {
                setJobs(res.data);
            })
    }, [])
    
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleViewDetails = (_id) => {

        if (!user) {
            Swal.fire(
                'Oh!',
                'You have to log in first to view details.',
                'error'
            ).then(result => {
                if (result.isConfirmed) {
                    console.log('after sweet', result);
                    navigate('/login')
                }
            })

        } else {
            navigate(`/allJobs/${_id}`);

        }
    }
console.log(user);

    return (
        <div>
            <h1 className="text-4xl font-semibold text-center mt-10">Latest Jobs</h1>
            <p className="text-center">Hey <span className="font-semibold">{user?.displayName}</span> Last 7 days jobs here</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
                {
                    jobs.map(job =>    <div key={job._id} className=" w-full bg-base-100 shadow-sm border border-sky-500 mx-auto">
                    <div className="card-body mt-5">
                        <h2 className="card-title">Name: {job.name}</h2>
                        <h2 className="card-title">Position: {job.title}</h2>
                        <div className=" text-start">
                            <h2><span className="text-xl font-semibold">Posting Date:</span> {job.jobPostingDate}</h2>
                            <p><span className="text-xl font-semibold">Deadline:</span> {job.deadline}</p>
                            <p className="text-xl font-semibold">Salary Range: {job.salary}</p>
                            <p className="text-xl font-semibold">Applicants: {job.applicants}</p>
                        </div>
                        <div className="card-actions justify-end mt-5">
                            <button onClick={() => handleViewDetails(job._id)} className="px-10 py-3 text-2xl font-semibold text-white bg-sky-400 w-full ">View Details</button>
                        </div>
                    </div>
                </div> )
                }
            </div>
        </div>
    );
};

export default LatestJobs;