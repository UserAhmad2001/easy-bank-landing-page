import React from "react";
import {click} from './App';


export default function Home(){
    return(
        <div className="home-section">
            <div className="home-txt">
                <h1>Next generation <br />digital banking</h1>
                <p>Take your financial life online. Your Easybank account <br />will be a one-stop-shop 
                for spending, saving, <br />budgeting, investing, and much more.</p>
                <button onClick={click}>Request Invite</button>
            </div>
            
            <div className="home-img">
            <picture>
                <source srcSet="assets\images\bg-intro-mobile.svg" media="(max-width:375px)"/>
                <img src="assets\images\bg-intro-desktop.svg" alt="home img" />
            </picture>
            <img className="mockup-img" src="assets\images\image-mockups.png" alt="phones image" />
            </div>
        </div>
    )
}