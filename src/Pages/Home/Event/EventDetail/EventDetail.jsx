import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventDetail = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        fetch(`/Event.json`)
            .then(res => res.json())
            .then(data => {
                const selectedEvent = data.find(event => event.id === parseInt(id, 10));
                setEvent(selectedEvent);
            })
            .catch(error => {
                console.error("Error fetching event data:", error);
            });
    }, [id]);

    if (!event) {

        return <div className="flex justify-center items-center"><span className="loading loading-bars loading-lg"></span></div>
    }

    return (

        <div className="flex justify-center items-center h-[100vh]">

            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={event.image} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{event.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{event.description}</p>
                </div>
            </a>

        </div>

    );
};

export default EventDetail;
