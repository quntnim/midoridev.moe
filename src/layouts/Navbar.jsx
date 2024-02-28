import React from "react";
import {Link, Outlet} from 'react-router-dom';
import "../styles/layouts/Navbar.css"

const CustomNavbar = () => {
    return (
        <div className="navbar">
            <nav>
                <Link to="/" className="midori-dev">&lt;/&gt;</Link>
                <div className="social-media">
                    <Link to="/subpage">Github</Link>
                    <Link to="/subpage">Twitter</Link>
                    <Link to="/subpage">Discord</Link>
                    <Link to="/subpage">Reserve</Link>
                </div>
            </nav>

            <Outlet/>
        </div>
    );
};

export default CustomNavbar;