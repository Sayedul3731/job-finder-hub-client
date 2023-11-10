import axios from "axios";
import {useEffect, useContext, useState} from "react"
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import MyJobsRow from "./MyJobsRow";


const MyJobs = () => {

    const [myJobs, setMyJobs] = useState([])
    const {user} = useContext(AuthContext)
    console.log(user?.email);
    const userEmail = user?.email;
    console.log(userEmail);

    useEffect(() => {
        axios.get(`http://localhost:5000/allJobs?email=${user?.email}`)
        .then(res => {
            setMyJobs(res.data);
        })
    },[user?.email])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="border border-sky-500">
                        <tr className="text-lg text-black border border-sky-500">
                            <th>Name</th>
                            <th>Job Title</th>
                            <th>Posting Date</th>
                            <th>Deadline</th>
                            <th>Salary Range</th>
                            <th>Button</th>
                            <th>Button</th>
                        </tr>
                    </thead>
                    <tbody className="border border-sky-500">
                        {/* row 1 */}
                        {
                            myJobs.map(myJob => <MyJobsRow 
                            key={myJob._id}
                            myJob={myJob}
                            ></MyJobsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobs;