import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLink = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/event"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Event
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/booking"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b border-transparent hover:border-indigo-500" : ""
                }
            >
                Booking
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Contact
            </NavLink>
        </li>

    </>
    const login =
        <>
            <NavLink to='/login'>Login</NavLink>
        </>
    return (
        <div className="navbar bg-white text-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}

                    </ul>
                </div>
                <img src='/public/logo.png' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "border-b border-transparent hover:border-indigo-500" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/event"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " border-b border-transparent hover:border-indigo-500" : ""
                            }
                        >
                            Event
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/booking"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " border-b border-transparent hover:border-indigo-500" : ""
                            }
                        >
                            Booking
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " border-b border-transparent hover:border-indigo-500" : ""
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {login}
            </div>
        </div>
    );
};

export default Navbar;