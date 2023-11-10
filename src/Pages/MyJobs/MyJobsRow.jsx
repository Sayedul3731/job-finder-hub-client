/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import {Link} from "react-router-dom"
import axios from "axios";
import Swal from "sweetalert2";


const MyJobsRow = ({ myJob }) => {
    const { _id, name, title, jobPostingDate, deadline, salary } = myJob;
    const { user } = useContext(AuthContext)
    console.log(user);
   
    const handleDelete = () => {
        console.log('clicked delete');
      
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/myJobs/${_id}`)
                .then(res => {
                    console.log(res.data);
                    if(res?.data?.deletedCount > 0){
                        Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                    }
                })
              }});
        
    }
    return (
        <tr className="text-base text-gray-900">
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
                <Link onClick={handleDelete} className="btn btn-ghost btn-xs">Delete</Link>
            </th>
        </tr>
    );
};

export default MyJobsRow;