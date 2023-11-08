import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="border h-screen flex justify-center items-center flex-col">
      <div className="w-full md:w-5/6 lg:w-4/6 h-3/4 md:h-3/4 lg:h-3/5  flex justify-center items-center">
        <img className="h-full" src="/page404.webp" alt="" />
      </div>
     <Link to="/" className="text-5xl font-semibold mt-5">Back To Home</Link>
    </div>
  );
};

export default ErrorPage;
