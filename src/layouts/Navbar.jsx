import React from "react";
import {Link, Outlet} from 'react-router-dom';
import "../styles/layouts/Navbar.css"

const CustomNavbar = () => {
    return (
        <div className="navbar">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/subpage">Subpage</Link>
            </nav>

            <Outlet/>
        </div>
    );
};

export default CustomNavbar;