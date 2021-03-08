import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export const Navbar = ({ icon, text }) => {
    return (
        <div className="navbar">
            <div className="nav-content container">
                <div className="nav-brand">
                    <a href="#" className="logo"><i className={icon}></i> {text}</a>
                </div>
                <ul className="nav-links">
                    <li className="nav-link">
                        <a href="#">Search By Country</a>
                    </li>
                    <li className="nav-link">
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;
