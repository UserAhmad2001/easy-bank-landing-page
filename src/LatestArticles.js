import React from "react";

export default function LatestArticles(){
    return(
        <section className="latest-articles">
            <h1>Latest Articles</h1>

            <div className="articles">

                <article className="article">
                    <img src="..\assets\images\image-currency.jpg" alt="article " />
                    <p>By Claire Robinson</p>
                    <p>
                    Receive money in any currency with no fees
                    The world is getting smaller and we’re becoming more mobile. So why should you be 
                    forced to only receive money in a single …
                    </p>
                </article>


                <article className="article">
                    <img src="..\assets\images\image-restaurant.jpg" alt="article " />
                    <p>By Wilson Hutton</p>
                    <p>
                    Treat yourself without worrying about money
                    Our simple budgeting feature allows you to separate out your spending and set 
                    realistic limits each month. That means you …
                    </p>
                </article>


                <article className="article">
                    <img src="..\assets\images\image-plane.jpg" alt="article " />
                    <p>By Wilson Hutton</p>
                    <p>
                    Take your Easybank card wherever you go
                    We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                    while you’re abroad. We’ll even show you …
                    </p>
                </article>


                <article className="article">
                    <img src="..\assets\images\image-confetti.jpg" alt="article " />
                    <p>By Claire Robinson</p>
                    <p>
                    Our invite-only Beta accounts are now live!
                    After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                    It’s easy to request an invite through the site ...
                    </p>
                </article>




            </div>
        </section>
    )
}