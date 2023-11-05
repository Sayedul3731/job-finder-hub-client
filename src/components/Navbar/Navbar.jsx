import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li><NavLink className="lg:text-xl md:font-medium mr-4" to="/">Home</NavLink></li>
      <li><NavLink className="lg:text-xl md:font-medium mr-4 mt-1 md:mt-1 lg:mt-0" to="/allJobs">All Jobs</NavLink></li>
      <li><NavLink className="lg:text-xl md:font-medium mr-4 mt-1 md:mt-1 lg:mt-0" to="/appliedJobs">Applied Jobs</NavLink></li>
      <li><NavLink className="lg:text-xl md:font-medium mr-4 mt-1 md:mt-1 lg:mt-0" to="/addJob">Add A Job</NavLink></li>
      <li><NavLink className="lg:text-xl md:font-medium mr-4 mt-1 md:mt-1 lg:mt-0" to="/myJobs">My Jobs</NavLink></li>
      <li><NavLink className="lg:text-xl md:font-medium mr-4 mt-1 md:mt-1 lg:mt-0" to="/blogs">Blogs</NavLink></li>
    </>
  );
  return (
    <div className="navbar bg-gradient-to-r from-sky-500 to-blue-500 text-white">
      <div className="navbar-start">
        <div>
          <img className="w-16 h-12 hidden lg:flex" src="logo.png" alt="" />
        </div>
        <div className="dropdown">
          <label tabIndex={0} className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-sky-500 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className=" normal-case text-xl font-bold pl-3 lg:pl-1">
          JobFinderHub
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className=" text-xl px-3 py-1 font-bold rounded-sm">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
