import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../components/Provider/AuthProvider";

const Event = () => {
    const { user } = useContext(AuthContext)
    const [event, setEvent] = useState([])
    useEffect(() => {
        fetch('/Event.json')
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [])
    return (
        <div className="mx-auto">
            <div className="text-center">
                <h1 className="text-6xl font-extrabold outline-2">Event List</h1>
                <p className="w-[50%] mx-auto mt-2">Component displays a list of event cards with titles, descriptions, and images, providing an organized event showcase</p>
            </div>

            <div className="mt-12 gap-6 flex flex-wrap justify-center items-center">
                {event.map((eventItem, idx) => (
                    <div key={idx} className="grid grid-cols-1 gap-6">
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[450px]">
                            <a href="#">
                                <img className="rounded-t-lg w-full h-60" src={eventItem.image} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{eventItem.title}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{eventItem.description}</p>
                            </div>
                            <div className="flex justify-center items-end p-5">
                                {user ? (
                                    <Link to={`/event/${eventItem.id}`}>
                                        <button className="btn btn-primary w-full py-2 px-8">Visit more</button>
                                    </Link>
                                ) : (
                                    <Link  to="/login"><button className="bg-black text-white text-sm font-bold px-6 py-2 rounded">See detail</button></Link>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Event;



// 