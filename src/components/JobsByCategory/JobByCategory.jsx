/* eslint-disable react/prop-types */


const JobByCategory = ({ onSiteJob, remoteJob, hybridJob, partTimeJob, fullTimeJob, allJob }) => {
    const { title, salary, jobPostingDate, deadline, applicants, name } = onSiteJob || remoteJob || hybridJob || partTimeJob || fullTimeJob || allJob;
    return (
        <div className="py-10">
            <div className=" bg-base-100 shadow-sm border border-sky-500 mx-auto">
                <div className="card-body mt-5">
                    <h2 className="card-title">Name: {name}</h2>
                    <h2 className="card-title">Position: {title}</h2>
                    <div className=" text-start">
                        <h2><span className="text-xl font-semibold">Posting Date:</span> {jobPostingDate}</h2>
                        <p><span className="text-xl font-semibold">Deadline:</span> {deadline}</p>
                        <p className="text-xl font-semibold">Salary Range: {salary}</p>
                        <p className="text-xl font-semibold">Applicants: {applicants}</p>
                    </div>
                    <div className="card-actions justify-end mt-5">
                        <button className="px-10 py-3 text-2xl font-semibold text-white bg-sky-400 w-full ">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobByCategory;