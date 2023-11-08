import axios from "axios";
import { useEffect, useState } from "react"
import AllJobsRow from "./AllJobsRow";

const AllJobs = () => {

    const [jobs, setJobs] = useState([])
    const [jobsByTitle, setJobsByTitle] = useState([])

    useEffect(() => {
        axios.get('https://job-finder-hub-server.vercel.app/allJobs')
            .then(res => {
                setJobs(res.data);
            })
    }, [])

    const handleJobsByTitle = (e) => {
        e.preventDefault()
        const inputFieldValue = e.target.search.value;
        console.log(inputFieldValue);
        const titleBasedJobs = jobs.filter(job => job.title === inputFieldValue)
        setJobsByTitle(titleBasedJobs)
        e.target.value = ''
    }

    return (
        <div>
            <h1 className="text-4xl font-semibold text-center mt-10 mb-5">All Jobs Here</h1>
            <div className="flex justify-between mb-2 px-3 items-center">
                <div>
                    <form onSubmit={handleJobsByTitle} className="flex justify-center items-center">
                        <input type="text" name="search" placeholder="Search…" className="border px-2 py-[11px] border-sky-500" />
                        <button type="submit" className="bg-sky-400 -ml-[1px] py-[13px] px-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </form>
                </div>
                <p className="text-end text-2xl font-medium">Total Jobs: {jobs.length}</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-lg border border-sky-500">
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
                            jobsByTitle?.length > 0 ? jobsByTitle?.map(job => <AllJobsRow
                                key={job._id}
                                job={job}
                            ></AllJobsRow>) : jobs?.map(job => <AllJobsRow
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