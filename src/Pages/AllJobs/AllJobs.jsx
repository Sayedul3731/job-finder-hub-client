import axios from "axios";
import { useEffect, useState } from "react"
import AllJobsRow from "./AllJobsRow";

const AllJobs = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/allJobs')
            .then(res => {
                setJobs(res.data);
            })
    }, [])
    return (
        <div>
            <h1 className="text-4xl font-semibold text-center mt-10 mb-5">All Jobs Here</h1>
            <p className="text-end text-2xl font-medium">Total Jobs: {jobs.length}</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-lg">
                            <th>Name</th>
                            <th>Job Title</th>
                            <th>Posting Date</th>
                            <th>Deadline</th>
                            <th>Salary Range</th>
                            <th>Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map(job => <AllJobsRow 
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

export default AllJobs;