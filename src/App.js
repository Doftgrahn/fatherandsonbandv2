import React from "react";

import {HashRouter as Router} from "react-router-dom";

import Header from "./components/header/header";
//import Main from "./components/Main";

import Routing from "./general/routing";

import Footer from "./components/footer/Footer";

import "./App.scss";

const App = () => {
    const hero = React.createRef();
    const aboutTheBand = React.createRef();
    const bandMembers = React.createRef();
    const history = React.createRef();
    const tour = React.createRef();
    const gallery = React.createRef();
    const media = React.createRef();
    const footer = React.createRef();

    const slideToHome = () => {
        window.scrollTo(0, hero.current.offsetTop);
    };

    const slidetoAboutBand = () => {
        window.scrollTo(0, aboutTheBand.current.offsetTop);
    };
    const slideToMembers = () => {
        window.scrollTo(0, bandMembers.current.offsetTop);
    };
    const slideToHistory = () => {
        window.scrollTo(0, history.current.offsetTop);
    };
    const slideToTour = () => {
        window.scrollTo(0, tour.current.offsetTop);
    };
    const slideToGallery = () => {
        window.scrollTo(0, gallery.current.offsetTop);
    };

    const slideToMedia = () => {
        window.scrollTo(0, media.current.offsetTop);
    };
    const slideToFooter = () => {
        window.scrollTo(0, footer.current.offsetTop);
    };

    return (
        <div className="App">
            <Router>
                <Header
                    slideToHome={slideToHome}
                    slidetoAboutBand={slidetoAboutBand}
                    slideToMembers={slideToMembers}
                    slideToHistory={slideToHistory}
                    slideToTour={slideToTour}
                    slideToGallery={slideToGallery}
                    slideToMedia={slideToMedia}
                    slideToFooter={slideToFooter}
                />
                <Routing
                    hero={hero}
                    aboutTheBand={aboutTheBand}
                    bandMembers={bandMembers}
                    history={history}
                    tourSlide={tour}
                    media={media}
                    gallerySlide={gallery}
                />
                {/*<Main
                hero={hero}
                aboutTheBand={aboutTheBand}
                bandMembers={bandMembers}
                history={history}
                tourSlide={tour}
                gallerySlide={gallery}
            />*/}
            </Router>
            <Footer footer={footer} />
        </div>
    );
};

export default App;
