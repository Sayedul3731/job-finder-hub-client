import { useEffect, useState } from "react";
import Recruiter from "./Recruiter";


const Recruiters = () => {

    const [recruiters, setRecruiters] = useState([])

    useEffect( () => {
        fetch('recruiters.json')
        .then(res => res.json())
        .then(data => setRecruiters(data))
    },[])
    return (
        <div>
            <h1 className="text-4xl font-semibold text-center">Top Recruiters</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {
                recruiters.map(recruiter => <Recruiter 
                    key={recruiter.id}
                    recruiter={recruiter}
                    ></Recruiter> )
            }
            </div>
        </div>
    );
};

export default Recruiters;