import React from "react";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import AboutBand from "./components/about_the_band/AboutBand";
import Band from "./components/band/Band";
import History from "./components/history/History";
import Tour from './components/tour/Tour';

import Footer from './components/footer/Footer';
import "./App.scss";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Hero />
            <AboutBand />
            <Band />
            <History />
            <Tour/>

            <Footer/>

        </div>
    );
};

export default App;
