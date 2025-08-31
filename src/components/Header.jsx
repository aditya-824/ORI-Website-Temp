import { Link, Outlet } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import orionLogo from "../assets/orion-logo.png"
import kjsseLogo from "../assets/kjsce-logo.png"
import kjsceLogo from "../assets/kjsce-logo.png"
import somaiyaLogo from "../assets/somaiya-logo.svg"

function Header() {
    // State to track if the user has scrolled past 100px
    const [scrolled, setScrolled] = useState(false);

    // Add a scroll event listener when the component mounts
    useEffect(() => {
        // This function checks the scroll position and updates state
        const onScroll = () => {
            // If the user has scrolled more than 600px vertically, set scrolled to true
            setScrolled(window.scrollY > 400);
        };
        // Listen for scroll events on the window
        window.addEventListener("scroll", onScroll);
        // Cleanup: remove the event listener when the component unmounts
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <Navbar expand="lg" className={`header-navbar${scrolled ? " scrolled" : ""}`}>
                <Navbar.Brand as={NavLink} to="/">
                    <img className="orion-logo" src={orionLogo} alt="Orion Logo" />
                </Navbar.Brand>
                <Navbar.Brand><img className="kjsse-logo" src={kjsseLogo} alt="KJSSE Logo" /></Navbar.Brand>
                <Navbar.Brand><img className="somaiya-logo" src={somaiyaLogo} alt="Somaiya Trust Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-items ms-auto">
                        <Nav.Link as={NavLink} to="/ORI-Website-Temp/" className="nav-link">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/ORI-Website-Temp/about" className="nav-link">About Us</Nav.Link>
                        <Nav.Link as={NavLink} to="/ORI-Website-Temp/workshop" className="nav-link">Workshop</Nav.Link>
                        <Nav.Link as={NavLink} to="/ORI-Website-Temp/sponsors" className="nav-link">Sponsors</Nav.Link>
                        <Nav.Link as={NavLink} to="/ORI-Website-Temp/media" className="nav-link">Media</Nav.Link>
                        <Nav.Link as={NavLink} to="/ORI-Website-Temp/supportus" className="nav-link">Support Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="header-spacer" />
            <Outlet />
        </>
    )
}

export default Header