import { NavLink } from "react-bootstrap";

const Event = () => {
    const conparenceNav = <>
        <li><NavLink to='/day1'>Day 1</NavLink></li>
        <li><NavLink to='/day2'>Day 2</NavLink></li>
        <li><NavLink to='/day3'>Day 3</NavLink></li>
        <li><NavLink to='/day4'>Day 4</NavLink></li>
    </>
    return (
        <div>
            <div className="text-center">
                <h1 className="text-6xl font-extrabold outline-2">Event Schedule</h1>
                <p className="w-[50%] mx-auto mt-2 text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem atque aperiam eligendi! Soluta labore placeat reiciendis incidunt aspernatur, ea dicta quae, mollitia praesentium pariatur dolor!</p>
            </div>
            <ul className="menu menu-horizontal px-1 text-center mx-auto" >
                {conparenceNav}
            </ul >
        </div>
    );
};

export default Event;