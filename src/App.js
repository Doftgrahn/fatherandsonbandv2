import React from "react";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import AboutBand from "./components/about_the_band/AboutBand";
import "./App.scss";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Hero />
            <AboutBand />
        </div>
    );
};

export default App;
