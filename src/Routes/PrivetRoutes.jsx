/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
   if(loading){
    return <span className="loading loading-spinner loading-lg"></span>
   }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivetRoutes;