import { useEffect, useState } from "react";
import Recruiter from "./Recruiter";
import axios from "axios";


const Recruiters = () => {

    const [recruiters, setRecruiters] = useState([])

    useEffect( () => {
        axios.get('https://job-finder-hub-server.vercel.app/recruiters')
        .then(res => {
            setRecruiters(res.data)
        })
    },[])

    return (
        <div>
            <h1 className="text-4xl font-semibold text-center">Top Recruiters</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                {
                    recruiters.map(recruiter => <Recruiter
                        key={recruiter.id}
                        recruiter={recruiter}
                    ></Recruiter>)
                }
            </div>
        </div>
    );
};

export default Recruiters;