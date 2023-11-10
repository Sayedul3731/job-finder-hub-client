/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AllJobsRow = ({ job }) => {
    const {_id, name, title, jobPostingDate, deadline, salary} = job;
    return (
        <tr className="text-base text-gray-900 font-semibold">
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
                <Link to={`/allJobs/${_id}`} className="">Details</Link>
            </th>
        </tr>
    );
};

export default AllJobsRow;