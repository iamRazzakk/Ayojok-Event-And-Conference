import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Event from "../Pages/Event/Event";
import Booking from "../Pages/Booking/Booking";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";


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
                path: '/event',
                element: <Event></Event>
            },
            {
                path: '/booking',
                element: <Booking></Booking>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default myCreatedRouter;