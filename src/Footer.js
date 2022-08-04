import React from "react";

export default function Footer(){

    return(
        <footer>
            <div className="logo-social">
                <img src="..\assets\images\logo-bg-dark.svg" alt="footer logo" />
                <div className="social">
                    <img src="..\assets\images\icon-facebook.svg" alt="facebook logo" />
                    <img src="..\assets\images\icon-youtube.svg" alt="youtube logo" />
                    <img src="..\assets\images\icon-twitter.svg" alt="twitter logo" />
                    <img src="..\assets\images\icon-pinterest.svg" alt="pinterest logo" />
                    <img src="..\assets\images\icon-instagram.svg" alt="instagram logo" />
                </div>
            </div>

            <nav className="sections-footer">
                <span>About Us</span>
                <span>Careers</span>
                <span>Contact</span>
                <span>Support</span>
                <span>Blog</span>
                <span>Privacy Policy</span>
            </nav>

            <div className="footer-btn-copyright">
                <button>Request Invite</button>
                <p>© Easybank. All Rights Reserved</p>
            </div>

        </footer>
    )
}