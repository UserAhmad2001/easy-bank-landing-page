import React from "react";
import {click} from './App';


export default function Footer(){


    return(
        <footer>
            <div className="logo-social">
                <img onClick={click} src="\easy-bank-landing-page\assets\images\logo-bg-dark.svg" alt="footer logo" />
                <div className="social">
                    <img onClick={click} src="\easy-bank-landing-page\assets\images\icon-facebook.svg" alt="facebook logo" />
                    <img onClick={click} src="\easy-bank-landing-page\assets\images\icon-youtube.svg" alt="youtube logo" />
                    <img onClick={click} src="\easy-bank-landing-page\assets\images\icon-twitter.svg" alt="twitter logo" />
                    <img onClick={click} src="\easy-bank-landing-page\assets\images\icon-pinterest.svg" alt="pinterest logo" />
                    <img onClick={click} src="\easy-bank-landing-page\assets\images\icon-instagram.svg" alt="instagram logo" />
                </div>
            </div>

            <nav className="sections-footer">
                <span onClick={click}>About Us</span>
                <span onClick={click}>Careers</span>
                <span onClick={click}>Contact</span>
                <span onClick={click}>Support</span>
                <span onClick={click}>Blog</span>
                <span onClick={click}>Privacy Policy</span>
            </nav>

            <div className="footer-btn-copyright">
                <button onClick={click}>Request Invite</button>
                <p>© Easybank. All Rights Reserved</p>
            </div>

        </footer>
    )
}