import Banner from "../../components/Banner/Banner";
import JobByCategory from "../../components/JobByCategory/JobByCategory";
import JobsByLocation from "../../components/JobsByLocation/JobsByLocation";
import Recruiters from "../../components/Recruiters/Recruiters";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobByCategory></JobByCategory>
      <JobsByLocation></JobsByLocation>
      <Recruiters></Recruiters>
    </div>
  );
};

export default Home;
