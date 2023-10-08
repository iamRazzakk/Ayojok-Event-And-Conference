import { Link, NavLink } from "react-router-dom";
import { signOut } from 'firebase/auth'; // Import the logout function from your authentication library
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);
    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("Logged out");
            })
            .catch(error => {
                console.log(error);
            });
    };
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
                    isPending ? "pending" : isActive ? "border-b border-transparent text-blue-700 underline hover:border-indigo-500" : ""
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
    return (
        <div className="navbar  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        {navLink}

                    </ul>
                </div>
                <img src='/public/logo.png' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " border-b border-transparent text-blue-700 underline hover:border-indigo-500" : ""
                            }
                        >
                            <p className="text-base font-semibold">Home</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/event"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " border-b border-transparent text-blue-700 underline hover:border-indigo-500" : ""
                            }
                        >
                            <p className="text-base font-semibold">Event</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/booking"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " border-b border-transparent text-blue-700 underline hover:border-indigo-500" : ""
                            }
                        >
                            <p className="text-base font-semibold">Booking</p>

                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/speaker"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " border-b border-transparent text-blue-700 underline hover:border-indigo-500" : ""
                            }
                        >
                            <p className="text-base font-semibold">Speaker</p>

                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " border-b border-transparent text-blue-700 underline hover:border-indigo-500" : ""
                            }
                        >
                            <p className="text-base font-semibold">Contact</p>
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div className="navbar-end">
                {user ? (

                    <div className="flex">
                        {/* <img src={user.photoURL} alt="" /> */}
                        <button className="btn btn-sm" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>

                ) : (
                    <Link to="/login">
                        <button className="btn btn-sm">Login</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;