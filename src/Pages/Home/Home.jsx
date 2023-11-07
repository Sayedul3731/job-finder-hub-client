import Banner from "../../components/Banner/Banner";
import JobsByCategory from "../../components/JobsByCategory/JobsByCategory";
import JobsByLocation from "../../components/JobsByLocation/JobsByLocation";
import Recruiters from "../../components/Recruiters/Recruiters";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobsByCategory></JobsByCategory>
      <JobsByLocation></JobsByLocation>
      <Recruiters></Recruiters>
    </div>
  );
};

export default Home;
