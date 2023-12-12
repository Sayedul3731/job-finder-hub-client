import axios from "axios";
import { useEffect, useState } from "react";
import AllJobsRow from "../AllJobs/AllJobsRow";


const InternshipJobs = () => {
    const [jobs, setJobs] = useState([])
    const [internshipJobs, setInternshipJobs] = useState([])
    useEffect( () => {
        axios.get('http://localhost:5000/allJobs')
        .then(res => {
            setJobs(res.data);
        })
    },[])

    useEffect(() => {
        const filteredJobs = jobs.filter(job => job.category.toLowerCase() === 'internship job')
        setInternshipJobs(filteredJobs)
    },[jobs])
    console.log(internshipJobs);
    return (
        <div>
            <h1 className="text-4xl font-semibold text-center my-10">Internship Jobs</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-lg text-black border border-sky-500">
                            <th>Name</th>
                            <th>Job Title</th>
                            <th>Posting Date</th>
                            <th>Deadline</th>
                            <th>Salary Range</th>
                            <th>Button</th>
                        </tr>
                    </thead>
                    <tbody className="border border-sky-500">
                        {/* row 1 */}
                        {
                           internshipJobs?.map(job => <AllJobsRow
                                key={job._id}
                                job={job}
                            ></AllJobsRow>) 
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InternshipJobs;