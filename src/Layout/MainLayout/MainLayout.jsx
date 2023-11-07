import { Outlet, useLocation} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {useEffect} from "react"


const MainLayout = () => {

  const location = useLocation()
  console.log(location);

  useEffect(() => {
    if(location.pathname == '/'){
      console.log('yes');
      document.title = 'JobFInderHub | Home'
    }else{
      document.title = `JobFinderHub ${location.pathname.replace('/', '| ')}`
      console.log('no');
    }
  }, [location.pathname])

  return (
    <div className="max-w-[1280px] mx-auto font-font-family">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
