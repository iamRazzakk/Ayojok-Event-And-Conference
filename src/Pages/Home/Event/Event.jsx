import { useEffect, useState } from "react";

const Event = () => {
    const [event, setEvent] = useState([])
    useEffect(() => {
        fetch('/Event.json')
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h1 className="text-6xl font-extrabold outline-2">Event List</h1>
                <p className="w-[50%] mx-auto mt-2"> Component displays a list of event cards with titles, descriptions, and images, providing an organized event showcase</p>
            </div>


            <div className="mt-12">
                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </a>
            </div>

            <div className="grid grid-cols-2 mb-12">

                {event.map((event, idx) => (
                    <div key={idx} className="mt-12">
                        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={event.image} alt={event.title} />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{event.title}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{event.description}</p>
                            </div>
                        </a>
                    </div>
                ))}



            </div>
        </div>
    );
};

export default Event;