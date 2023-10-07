import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Speaker = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        // Fetch data from your JSON file (assuming it's in the same directory)
        fetch('/Card.json')
            .then((response) => response.json())
            .then((data) => {
                setCards(data);
                AOS.init({
                    duration: 1000,
                });
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <div className='text-center mb-12'>
                <h1 className='text-7xl font-bold underline'>Skill Speaker</h1>
                <p className='text-xl w-[50%] mx-auto mt-6'>Empowering audiences with expertise and inspiration. Our skillful speakers share knowledge, ignite creativity, and drive success. Elevate your event with our exceptional speakers.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full'>
                {cards?.map((card, index) => (
                    <div
                        key={card.id}
                        className={`card bg-slate-400 rounded`}
                        data-aos={index % 1 === 0 ? 'fade-right' : 'fade-left'}
                        data-aos-duration="1500"
                    >
                        <img className='h-72' src={card.imgUrl} alt={card.name} />
                        <div className='ml-3 text-xl mt-6 text-center'>
                            <h2 className='font-bold text-blue-600 underline mb-4'>{card.name}</h2>
                            <p className='mb-4'>Business: {card.business}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Speaker;
