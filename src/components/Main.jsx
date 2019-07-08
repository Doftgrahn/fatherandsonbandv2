import React from "react";
import Hero from "./hero/hero";
import AboutBand from "./about_the_band/AboutBand";
import Band from "./band/Band";
import History from "./history/History";
import Tour from "./tour/Tour";
//import Media from "./media/Media";
import Gallery from "./gallery/Gallery";

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
