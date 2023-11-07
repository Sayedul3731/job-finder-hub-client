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
            <h1>My Jobs: {myJobs.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-lg">
                            <th>Name</th>
                            <th>Job Title</th>
                            <th>Posting Date</th>
                            <th>Deadline</th>
                            <th>Salary Range</th>
                            <th>Button</th>
                        </tr>
                    </thead>
                    <tbody>
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