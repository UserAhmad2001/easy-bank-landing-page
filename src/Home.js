import React from "react";

export default function Home(){
    return(
        <div className="home-section">
            <div className="home-txt">
                <h1>Next generation digital banking</h1>
                <p>Take your financial life online. Your Easybank account will be a one-stop-shop 
                for spending, saving, budgeting, investing, and much more.</p>
                <button>Request Invite</button>
            </div>
            <picture>
                <source srcSet="..\assets\images\bg-intro-mobile.svg" media="(max-width:375px)"/>
                <img src="..\assets\images\bg-intro-desktop.svg" alt="home img" />
            </picture>
        </div>
    )
}