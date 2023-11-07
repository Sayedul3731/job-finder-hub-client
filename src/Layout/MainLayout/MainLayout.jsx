import { Outlet, useLocation} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {useEffect} from "react"


const MainLayout = () => {

  const location = useLocation()

  useEffect(() => {
    if(location.pathname == '/'){
      document.title = 'JobFInderHub | Home'
    }else{
      document.title = `JobFinderHub ${location.pathname.replace('/', '| ')}`
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
