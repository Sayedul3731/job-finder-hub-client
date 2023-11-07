/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import {Link} from "react-router-dom"


const MyJobsRow = ({ myJob }) => {
    const { _id, name, title, jobPostingDate, deadline, salary } = myJob;
    const { user } = useContext(AuthContext)
    console.log(user);
    // const handleUpdate = () => {
    //     console.log('clicked update');
    // }
    const handleDelete = () => {
        console.log('clicked delete');
    }
    return (
        <tr className="text-base">
            <td>
                {name}
            </td>
            <td>
                {title}
            </td>
            <td>

                {jobPostingDate}

            </td>
            <td>

                {deadline}

            </td>
            <td>{salary}</td>
            <th>
                <Link to={`/update/${_id}`} className="btn btn-ghost btn-xs">Update</Link>
            </th>
            <th>
                <p onClick={handleDelete} to={`/allJobs/${_id}`} className="btn btn-ghost btn-xs">Delete</p>
            </th>
        </tr>
    );
};

export default MyJobsRow;