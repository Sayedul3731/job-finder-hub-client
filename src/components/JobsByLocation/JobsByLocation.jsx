import { useState, useEffect } from "react";
import JobByLocation from "./JobByLocation";
import axios from "axios";
import { motion } from 'framer-motion'

const JobsByLocation = () => {

    const [jobsLocation, setJobsLocation] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/jobsByLocation')
            .then(res => {
                console.log(res.data)
                setJobsLocation(res.data)
            })
    }, [])

    return (
        <div
           
            
        >
            <h1 className="text-4xl font-semibold text-center">Jobs By Location</h1>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10"
            
            animate={{ y: [0, 50, 0] }}
            transition={{ ease: "easeOut", duration: 3 }}
            >
                {
                    jobsLocation.map(jobLocation => <JobByLocation
                        key={jobLocation.id}
                        jobLocation={jobLocation}
                    ></JobByLocation>)
                }
            </motion.div>
        </div>
    );
};

export default JobsByLocation;