/* eslint-disable react/prop-types */


const JobByLocation = ({ jobLocation }) => {
    const { img, total, location ,type} = jobLocation;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} className="h-[300px]" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{location}</h2>
                <div className="flex justify-between">
                    <div className="text-lg">{type}</div>
                    <div className="text-lg">{total} Companies</div>
                </div>

            </div>
        </div>
    );
};

export default JobByLocation;