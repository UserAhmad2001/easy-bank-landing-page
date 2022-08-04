import React from "react";

export default function Header(){
    return(
        <header>
            <img src="../assets/images/logo.svg" alt="company logo" />
            <i className="fa-solid"></i>
            <nav>
                <span>Home</span>
                <span>About</span>
                <span>Contact</span>
                <span>Blog</span>
                <span>Careers</span>
            </nav>
            <button>Request Invite</button>
        </header>
    )
}