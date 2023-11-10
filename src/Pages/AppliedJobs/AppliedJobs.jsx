import axios from "axios";
import { useEffect, useContext, useState } from "react"
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import AppliedJobsRow from "./AppliedJobsRow";
import { usePDF } from 'react-to-pdf';


const AppliedJobs = () => {
    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
    const [appliedJobs, setAppliedJobs] = useState([])
    const [filteredJobs, setFilteredJobs] = useState([])
    const [selectCategory, setSelectCategory] = useState('')
    const { user } = useContext(AuthContext)

    useEffect(() => {
        axios.get(`http://localhost:5000/appliedJobs?email=${user?.email}`, { withCredentials: true })
            .then(res => {
                setAppliedJobs(res.data);
            })
    }, [user?.email])
    console.log(appliedJobs);
    const handleJobsByCategory = (e) => {
        e.preventDefault()
        const val = e.target.value;
        setSelectCategory(val)
        const filteredJobs = appliedJobs.filter(job => job.category.toLowerCase() === val.toLowerCase())
        console.log(filteredJobs.length);
        if(filteredJobs.length > 0){

            setFilteredJobs(filteredJobs)
        }else{
            setFilteredJobs([])
        }
        
    }

    return (

        <div>
            <div className="flex justify-end p-2">
                <button onClick={() => toPDF()} className="underline font-bold">Download PDF</button>
            </div>
            <h1 className="text-4xl font-semibold text-center">Applied Jobs Here </h1>
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
                <div ref={targetRef} className="overflow-x-auto">
                    <table className="table mb-5">
                        {/* head */}
                        <thead>
                            <tr className="text-lg text-center text-black border border-sky-500">
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
                                ></AppliedJobsRow>) : appliedJobs?.map(appliedJob => <AppliedJobsRow
                                    key={appliedJob._id}
                                    appliedJob={appliedJob}
                                ></AppliedJobsRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;