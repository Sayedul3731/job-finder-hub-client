import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Home from "../Pages/Home/Home";



const AnimationRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Home location={location} key={location.pathname}></Home>
        </AnimatePresence>
    );
};

export default AnimationRoutes;