/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AllJobsRow = ({ job }) => {
    const {_id, name, title, jobPostingDate, deadline, salary} = job;
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
                <Link to={`/allJobs/${_id}`} className="btn btn-ghost btn-xs">details</Link>
            </th>
        </tr>
    );
};

export default AllJobsRow;