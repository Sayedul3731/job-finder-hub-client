import Swal from "sweetalert2";


const AddAJob = () => {

    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const newProduct = {name, brand, type, price, description, rating, photo};
        console.log(newProduct);
        fetch('https://technology-and-electronics-server-pjepewb2m-ate-yours-projects.vercel.app/product', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    'Success!',
                    'Product added Successfully.',
                    'success'
                  )
            }
        })
    }
    return (
        <div className="bg-gradient-to-r from-sky-400 to-blue-300 pb-10 pt-10 md:pt-7  p-1 md:p-24">
        <h1 className="text-4xl font-semibold text-center mb-10">Add A Job</h1>

        <form onSubmit={handleAddProduct}>
            {/* form row  */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg">Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Logged User Name" className="input input-bordered w-full md:w-full" />
                    </label>
                </div>
            {/* form row  */}
            <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg">Job Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="category" placeholder="On Site Job/Remote Job/Hybrid Job/Part Time Job/Full-Time Job/Contract Job" className="input input-bordered w-full md:w-full" />
                    </label>
                </div>
            {/* form row  */}
            <div className="md:flex gap-5">

                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-lg">Job Title</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="title" placeholder="Job Title" className="input input-bordered w-full md:w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-lg">Salary Range</span>
                    </label>
                    <label className="input-group">
                        <input type="number" name="salary" placeholder="Salary Range" className="input input-bordered w-full md:w-full" />
                    </label>
                </div>
            </div>
            {/* form row  */}
            <div className="md:flex gap-5">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg">Job Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" placeholder="Job Description" className="input input-bordered w-full md:w-full" />
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg">Job Posting Date</span>
                    </label>
                    <label className="input-group">
                        <input type="date" name="date" placeholder="Job Posting Date" className="input input-bordered w-full md:w-full" />
                    </label>
                </div>
            </div>
            {/* form row  */}
            <div className="md:flex gap-5">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg">Application Deadline</span>
                    </label>
                    <label className="input-group">
                        <input type="date" name="deadline" placeholder="Applicants Deadline" className="input input-bordered w-full md:w-full" />
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg">Applicants Number</span>
                    </label>
                    <label className="input-group">
                        <input type="number" name="applicants" placeholder="Job Applicants Number" className="input input-bordered w-full md:w-full" />
                    </label>
                </div>
            </div>
            {/* form row  */}
            <div className="md:flex gap-5">
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text text-lg">Photo</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" placeholder="Job Banner photoURL" className="input input-bordered w-full md:w-full" />
                    </label>
                </div>
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text text-lg">Logo</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" placeholder="Company LogoURL" className="input input-bordered w-full md:w-full" />
                    </label>
                </div>
            </div>

            <input className="btn btn-block bg-sky-400 hover:bg-sky-500 text-white mt-10" type="submit" value="Add Job" />
        </form>
    </div>
    );
};

export default AddAJob;