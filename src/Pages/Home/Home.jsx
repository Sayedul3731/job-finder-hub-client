import Banner from "../../components/Banner/Banner";
import JobByCategory from "../../components/JobsByCategory/JobsByCategory";
import JobsByLocation from "../../components/JobsByLocation/JobsByLocation";
// import JobsByLocation from "../../components/JobsByLocation/JobsByLocation";
import Recruiters from "../../components/Recruiters/Recruiters";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobByCategory></JobByCategory>
      <JobsByLocation ></JobsByLocation>
      <Recruiters></Recruiters>
    </div>
  );
};

export default Home;
