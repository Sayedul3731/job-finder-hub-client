import {motion} from "framer-motion"

const Banner = () => {
  return (
    <div className="w-full h-[500px] flex justify-center items-center bg-gradient-to-r from-sky-500 to-blue-500"
    >
      <motion.div className="text-center text-white"
      
      animate={{ x: [0, 50, 0] }}
      transition={{ ease: "easeOut", duration: 3 }}

      >
        <h1 className="text-5xl my-5">Find Your Dream Job with Job Finder Hub</h1>
        <p className="text-lg mb-5">Discover your dream job with Job Finder Hub. We connect job seekers <br /> with thousands of opportunities worldwide. Explore a vast job database, <br /> advanced search filters, and user-friendly tools. Join us to take the next step in your career.</p>
        <div className="form-control ">
          <div className="input-group flex justify-center">
            <input type="text" placeholder="Search…" className=" px-2" />
            <button className="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
