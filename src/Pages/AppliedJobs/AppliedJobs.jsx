import axios from "axios";
import { useEffect, useContext, useState } from "react"
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import AppliedJobsRow from "./AppliedJobsRow";


const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([])
    const { user } = useContext(AuthContext)
    console.log(user?.email);
    useEffect(() => {
        axios.get(`http://localhost:5000/appliedJobs?email=${user?.email}`)
            .then(res => {
                setAppliedJobs(res.data);
            })
    }, [user?.email])
    return (
        <div>
            <h1>Applied Jobs: {appliedJobs.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-lg text-center">
                            <th>Company Logo</th>
                            <th className="">Job Banner</th>
                            <th>Job Title</th>
                            <th>Job Category</th>
                            <th>Job Description</th>
                            <th>Salary Range</th>
                            <th>Applicants</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            appliedJobs.map(appliedJob => <AppliedJobsRow 
                            key={appliedJob._id}
                            appliedJob={appliedJob}
                            ></AppliedJobsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppliedJobs;