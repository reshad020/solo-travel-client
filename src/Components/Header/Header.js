import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <div className="sticky md:w-full top-0">
            <nav className=" relative flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-900 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            to="/home"
                        >
                            <i className=" fa-language mr-4"></i><span className="">Solo Traveler</span>
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            #
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/home"
                                >
                                    <span className="ml-2">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/service"
                                >
                                    <span className="ml-2">Our service</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/blogging"
                                >
                                    <span className="ml-2">Blogging</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/about"
                                >
                                    <span className="ml-2">About us</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                               
                                    <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/login">Login</Link>

                                
                                   
                                
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;