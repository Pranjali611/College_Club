import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";
import "../App.css"
import { Route } from "react-router-dom";
import LoginSignup from "./LoginSignup/LoginSignup";

export const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    // Handle sticky navbar on scroll
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [showMenu, setShowMenu] = useState(false);

    const handleButtonToggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className={`container ${sticky ? 'dark-nav' : ''}`}>
            <div className="contain">
                <div className="grid navbar-grid">
                    {/* Logo */}
                    <div className="log">
                        <h1>Vishwakarma Institute</h1>
                    </div>

                    {/* Navigation Menu */}
                    <nav className={showMenu ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li className="a">
                                <Link to="Hero" smooth={true} offset={0} duration={500}>
                                    Home
                                </Link>
                            </li>
                            <li className="a">
                                <Link to="Program" smooth={true} offset={-400} duration={500}>
                                    Mission
                                </Link>
                            </li>
                            <li className="a">
                                <Link to="Clubslider" smooth={true} offset={-150} duration={500}>
                                    Clubs
                                </Link>
                            </li>
                            <li className="a">
                                <Link to="About" smooth={true} offset={-260} duration={500}>
                                    About Us
                                </Link>
                            </li>
                            <li className="a">
                                <Link to="Contact" smooth={true} offset={-260} duration={500}>
                                    Contact
                                </Link>
                            </li>
                            <li className="a">
                                {/* Link to LoginSignup page */}
                                <a href="/LoginSignup" className="a">Login</a>
                            </li>
                        </ul>
                    </nav>

                    {/* Hamburger Menu */}
                    <div className="ham-menu">
                        <button onClick={handleButtonToggle}>
                            <RxHamburgerMenu />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
