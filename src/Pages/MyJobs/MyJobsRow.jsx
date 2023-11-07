/* eslint-disable react/prop-types */


const MyJobsRow = ({myJob}) => {
    const {_id, name, title, jobPostingDate, deadline, salary} = myJob;
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
            <p to={`/allJobs/${_id}`} className="btn btn-ghost btn-xs">details</p>
        </th>
    </tr>
    );
};

export default MyJobsRow;