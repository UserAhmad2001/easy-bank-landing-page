import React from "react";
import  ReactDOM  from "react-dom";
import Header from './Header';
import Footer from './Footer';
import WhyChooseUs from './WhyChooseUs';
import LatestArticles from './LatestArticles';
import Home from './Home';
import Favicon from "react-favicon";
import css from '../assets/style.css';

export default function App(){


    return(
        <main className="app">
            <Favicon url="../assets/images/favicon-32x32.png" />
            <Header />
            <Home />
            <WhyChooseUs />
            <LatestArticles />
            <Footer />
            
        </main>

    );
}

export function click(){
    alert('this is a clickable link')
}