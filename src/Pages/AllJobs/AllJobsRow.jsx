/* eslint-disable react/prop-types */


const AllJobsRow = ({ job }) => {
    const {name, title, jobPostingDate, deadline, salary} = job;
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
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default AllJobsRow;