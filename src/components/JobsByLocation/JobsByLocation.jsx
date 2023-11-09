import { useState, useEffect } from "react";
import JobByLocation from "./JobByLocation";
import axios from "axios";

const JobsByLocation = () => {

    const [jobsLocation, setJobsLocation] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/jobsByLocation')
    .then(res => {
        console.log(res.data)
        setJobsLocation(res.data)
    })
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