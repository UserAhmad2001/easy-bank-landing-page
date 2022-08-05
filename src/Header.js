import React from "react";
import {click} from './App';

export default function Header(){

    return(
        <header>
            <img onClick={click} src="assets/images/logo.svg" alt="company logo" />
            <img className="menu" tabIndex={0} src="assets/images/icons8-menu.svg" alt="menu icon" />
            <nav>
                <span onClick={click}>Home</span>
                <span onClick={click}>About</span>
                <span onClick={click}>Contact</span>
                <span onClick={click}>Blog</span>
                <span onClick={click}>Careers</span>
            </nav>
            <button onClick={click}>Request Invite</button>
        </header>
    )
}