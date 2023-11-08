/* eslint-disable react/prop-types */

const AppliedJobsRow = ({ appliedJob,filteredJob }) => {
    const { title, salary, applicants, category, description, logo, photo } = appliedJob || filteredJob;
    return (
        <tr className="text-base text-center border border-sky-500">
            <td><img className="w-[100px]" src={logo} alt="" /></td>
            <td>

                <div className="h-[200px] w-[300px]  flex items-center bg-gradient-to-r from-sky-400">
                    <div className="pl-4">
                        <p className="">WE ARE <br /> HIRING...</p>
                        <p className="">We are looking for talented to fill these vacancies.</p>
                    </div>
                    <div className="h-full w-full">
                        <img className="h-full object-cover" src={photo} alt="" />
                    </div>
                </div>
            </td>
            <td>{title}</td>
            <td>{category}</td>
            <td >{description.slice(0, 100)}<span className="cursor-pointer">...see more</span></td>
            <td>{salary}</td>
            <td>{applicants}</td>
        </tr>
    );
};

export default AppliedJobsRow;