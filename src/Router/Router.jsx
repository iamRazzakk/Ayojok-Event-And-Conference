import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
// import Event from "../Pages/Event/Events";
import Booking from "../Pages/Booking/Booking";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import Events from "../Pages/Event/Events";

import Speaker from "../Pages/Home/Speaker/Speaker";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import EventDetail from "../Pages/Home/Event/EventDetail/EventDetail";


const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/event",
                element: <Events></Events>,
            },
            {
                path: '/event/:id',
                element: <EventDetail></EventDetail>
            },
            {
                path: '/booking',
                element: <Booking></Booking>
            },
            {
                path: '/speaker',
                element: <Speaker></Speaker>
            },
            {
                path: '/contact',
                element: <PrivateRoute><Contact></Contact></PrivateRoute>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <SingUp></SingUp>
            }
        ]
    }
])

export default myCreatedRouter;
