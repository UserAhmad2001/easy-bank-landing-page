import React from "react";

export default function WhyChooseUs(){
    return(
        <div className="why-us">
            <h1 className="why-us-title">Why choose Easybank?</h1>
            <p className="why-us-desc">We leverage Open Banking to turn your bank account into your financial hub. <br className="break" />Control 
            your finances like never before.</p>

            <div className="why-us-reasons">
                <div className="reason">
                <img src="\assets\images\icon-online.svg" alt="reason 1" />
                <h1>Online Banking</h1>
                <p>Our modern web and mobile applications allow you to keep track of your finances 
                wherever you are in the world.</p>
                </div>

                <div className="reason">
                <img src="\assets\images\icon-budgeting.svg" alt="reason 2" />
                <h1>Simple Banking</h1>
                <p>See exactly where your money goes each month. Receive notifications when you’re 
                close to hitting your limits.</p>
                </div>

                <div className="reason">
                <img src="\assets\images\icon-onboarding.svg" alt="reason 3" />
                <h1>Fast Onboarding</h1>
                <p>We don’t do branches. Open your account in minutes online and start taking control 
                of your finances right away.</p>
                </div>

                <div className="reason">
                <img src="\assets\images\icon-api.svg" alt="reason 4" />
                <h1>Open API</h1>
                <p>Manage your savings, investments, pension, and much more from one account. Tracking 
                your money has never been easier.</p>
                </div>

            </div>


        </div>
    )
}