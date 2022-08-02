import React from "react";
import  ReactDOM  from "react-dom";
import Header from './Header';
import Footer from './Footer';
import WhyChooseUs from './WhyChooseUs';
import LatestArticles from './LatestArticles';
import Home from './Home';

export default function App(){
    return(
        <main className="app">
            <Header />
            <Home />
            <WhyChooseUs />
            <LatestArticles />
            <Footer />
        </main>

    );
}