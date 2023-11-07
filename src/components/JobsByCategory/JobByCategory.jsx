/* eslint-disable react/prop-types */


const JobByCategory = ({onSiteJob, remoteJob, hybridJob, partTimeJob,fullTimeJob,contractJob}) => {
    const {title, salary, jobPostingDate, deadline, applicants, name} = onSiteJob || remoteJob || hybridJob || partTimeJob || fullTimeJob || contractJob;
    return (
        <div className="py-10 w-[400px]">
            <div className=" bg-base-100 shadow-sm border border-sky-500 mx-auto">
                <div className="card-body mt-5">
                    <h2 className="card-title">position: {title}</h2>
                    <p><span className="text-xl font-semibold">Description:</span> {name}</p>
                    <p className="text-xl font-semibold">Salary Range: {salary}</p>
                    <p className="text-xl font-semibold">Applicants: {applicants}</p>
                    <div className="card-actions justify-end mt-5">
                        <button onClick={() => document.getElementById('modal').showModal()} className="px-10 py-3 text-2xl font-semibold text-white bg-sky-400">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobByCategory;