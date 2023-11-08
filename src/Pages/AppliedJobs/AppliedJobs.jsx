import axios from "axios";
import { useEffect, useContext, useState } from "react"
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import AppliedJobsRow from "./AppliedJobsRow";


const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([])
    const [filteredJobs, setFilteredJobs] = useState([])
    const [selectCategory, setSelectCategory] = useState('')
    const { user } = useContext(AuthContext)

    useEffect(() => {
        axios.get(`https://job-finder-hub-server.vercel.app/appliedJobs?email=${user?.email}`)
            .then(res => {
                setAppliedJobs(res.data);
            })
    }, [user?.email])

    const handleJobsByCategory = (e) => {
        e.preventDefault()
        const val = e.target.value;
        setSelectCategory(val)
        const filteredJobs = appliedJobs.filter(job => job.category.toLowerCase() === val.toLowerCase())
        setFilteredJobs(filteredJobs)
    }

    return (
        <div>
            <div className=" flex justify-start my-5">
                <form className="flex justify-center items-center border border-sky-500">
                    <input type="text" defaultValue={selectCategory} name="search" placeholder="Search…" className=" px-2 py-[11px]" />
                    <select onChange={handleJobsByCategory} className="py-[11px]" name="" id="">
                        <option value="On Site Job">On Site Job</option>
                        <option value="Part Time Job">Part Time Job</option>
                        <option value="Full Time Job">Full Time Job</option>
                        <option value="Remote Job">Remote Job</option>
                        <option value="Hybrid Job">Hybrid Job</option>
                    </select>
                </form>
            </div>
            <div className="overflow-x-auto">
                <table className="table mb-5">
                    {/* head */}
                    <thead>
                        <tr className="text-lg text-center border border-sky-500">
                            <th>Company Logo</th>
                            <th className="">Job Banner</th>
                            <th>Job Title</th>
                            <th>Job Category</th>
                            <th>Job Description</th>
                            <th>Salary Range</th>
                            <th>Applicants</th>
                        </tr>
                    </thead>
                    <tbody className="border border-sky-500">
                        {/* row 1 */}
                        {
                            filteredJobs.length > 0 ? filteredJobs.map(filteredJob => <AppliedJobsRow
                                key={filteredJob._id}
                                filteredJob={filteredJob}
                            ></AppliedJobsRow>) : appliedJobs.map(appliedJob => <AppliedJobsRow
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