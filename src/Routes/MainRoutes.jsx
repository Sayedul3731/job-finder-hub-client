import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddAJob from "../Pages/AddAJob/AddAJob";
import AllJobs from "../Pages/AllJobs/AllJobs";
import JobDetails from "../Pages/AllJobs/JobDetails";
import MyJobs from "../Pages/MyJobs/MyJobs";
import Update from "../components/Update/Update";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/addAJob",
        element: <AddAJob></AddAJob>
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>
      },
      {
        path: "/allJobs/:id",
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/allJobs/${params.id}`)
      },
      {
        path: "/myJobs",
        element: <MyJobs></MyJobs>
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/update/${params.id}`)
      }
    ],
  },
]);

export default router;
