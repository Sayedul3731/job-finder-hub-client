/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";



const PrivetRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivetRoutes;