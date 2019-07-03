import React from "react";
import Hero from "./hero/hero";
import AboutBand from "./about_the_band/AboutBand";
import Band from "./band/Band";
import History from "./history/History";
import Tour from "./tour/Tour";
//import Media from "./media/Media";
import Gallery from "./gallery/Gallery";

const Main = ({
    hero,
    aboutTheBand,
    bandMembers,
    history,
    tourSlide,
    gallerySlide,
    media
}) => {
    return (
        <div className="App">
            <Hero hero={hero} />
            <AboutBand aboutTheBand={aboutTheBand} />
            <Band bandMembers={bandMembers} />
            <History history={history} />
            <Gallery gallerySlide={gallerySlide} />
            {/*<Media media={media} />*/}
            <Tour tourSlide={tourSlide} />
        </div>
    );
};

export default Main;
