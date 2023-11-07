// import axios from "axios";
// import { useEffect } from "react";
import { useLoaderData } from "react-router-dom"


const JobDetails = () => {

    // useEffect( () => {
    //     axios.get('/allJobs/:id')
    //     .then(res => {
    //         console.log(res.data);
    //     })
    // },[])
    const job = useLoaderData()
    console.log(job);
    const { logo, title, description, salary,applicants } = job;
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
                    <div>
                        <img src="/banner.png" alt="" />
                    </div>
                </div>
                <div className="card-body mt-5">
                    <h2 className="card-title">position: {title}</h2>
                    <p><span className="text-xl font-semibold">Description:</span> {description}</p>
                    <p className="text-xl font-semibold">Salary Range: {salary}</p>
                    <p className="text-xl font-semibold">Applicants: {applicants}</p>
                    <div className="card-actions justify-end mt-5">
                        <button className="px-10 py-3 text-2xl font-semibold text-white bg-sky-400">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;