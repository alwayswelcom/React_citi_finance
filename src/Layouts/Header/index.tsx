import React from "react";

import './header.css'


const Header = () => {
    return (
        <div className="header bg-darkblue">
            <div className="logo">
                <img src="./svg/APEX LOGO.svg"></img>
            </div>
            <div className="navbar">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT US</li> 
                    <li>FAQ</li>
                    <li>SELECT LANGUAGE</li>
                    <li>
                        <button className="bg-choc btn-login">LOGIN</button></li> 
                </ul>
            </div>
        </div>
    )

}

export default Header