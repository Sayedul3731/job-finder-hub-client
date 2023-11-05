import { useEffect, useState } from "react";
import JobByLocation from "./JobByLocation";

const JobsByLocation = () => {

    const [jobsLocation, setJobsLocation] = useState([])

    useEffect( () => {
        fetch('location.json')
        .then(res => res.json())
        .then(data => setJobsLocation(data))
    },[])
    return (
        <div>
            <h1 className="text-4xl font-semibold text-center">Jobs By Location</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                {
                    jobsLocation.map(jobLocation => <JobByLocation
                    key={jobLocation.id}
                    jobLocation={jobLocation}
                    ></JobByLocation>)
                }
            </div>
        </div>
    );
};

export default JobsByLocation;