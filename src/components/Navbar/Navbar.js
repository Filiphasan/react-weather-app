import React from 'react'
import './Navbar.css'

export const Navbar = ({ icon, text }) => {
    return (
        <div className="navbar">
            <div className="nav-content container">
                <div className="nav-brand">
                    <a href="#" className="logo"><i className={icon}></i> {text}</a>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
