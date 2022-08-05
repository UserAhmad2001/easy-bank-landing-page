import React from "react";
import {click} from './App';


export default function LatestArticles(){
    return(
        <section className="latest-articles">
            <h1>Latest Articles</h1>

            <div className="articles">

                <article className="article " onClick={click}>
                    <img src="\easy-bank-landing-page\assets\images\image-currency.jpg" alt="article " />
                    <p className="author">By Claire Robinson</p>
                    <p  href="#">Receive money in any currency with no fees</p>
                    <p className="summary">
                    The world is getting smaller and we’re becoming more mobile. So why should you be 
                    forced to only receive money in a single …
                    </p>
                </article>


                <article className="article " onClick={click}>
                    <img src="\easy-bank-landing-page\assets\images\image-restaurant.jpg" alt="article " />
                    <p className="author">By Wilson Hutton</p>
                    <p  href="#">Treat yourself without worrying about money</p>
                    <p className="summary">
                    Our simple budgeting feature allows you to separate out your spending and set 
                    realistic limits each month. That means you …
                    </p>
                </article>


                <article className="article " onClick={click}>
                    <img src="\easy-bank-landing-page\assets\images\image-plane.jpg" alt="article " />
                    <p className="author">By Wilson Hutton</p>
                    <p  href="#">Take your Easybank card wherever you go</p>
                    <p className="summary">
                    We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                    while you’re abroad. We’ll even show you …
                    </p>
                </article>


                <article className="article " onClick={click}>
                    <img src="\easy-bank-landing-page\assets\images\image-confetti.jpg" alt="article " />
                    <p className="author">By Claire Robinson</p>
                    <p  href="#">Our invite-only Beta accounts are now live!</p>
                    <p className="summary">
                    After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                    It’s easy to request an invite through the site ...
                    </p>
                </article>




            </div>
        </section>
    )
}