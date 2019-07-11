import React from "react";
import Hero from "../../components/hero/hero";
import AboutBand from "../../components/about_the_band/AboutBand";
import Band from "../../components/band/Band";
import History from "../../components/history/History";
import Tour from "../../components/tour/Tour";
//import Media from "./media/Media";
import Gallery from "../../components/gallery/Gallery";

const Main = () => {
    return (
        <div className="App">
            <Hero />
            <AboutBand />
            <Band />
            <History />
            <Gallery />
            {/*<Media />*/}
            <Tour />
        </div>
    );
};

export default Main;
