import React from "react";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import AboutBand from "./components/about_the_band/AboutBand";
import Band from "./components/band/Band";
import History from "./components/history/History";
import Tour from "./components/tour/Tour";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";
import "./App.scss";

const App = () => {
    const hero = React.createRef();
    const aboutTheBand = React.createRef();
    const bandMembers = React.createRef();
    const history = React.createRef();
    const tour = React.createRef();
    const gallery = React.createRef();
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
    const slideToFooter = () => {
        window.scrollTo(0, footer.current.offsetTop);
    };

    return (
        <div className="App">
            <Header
                slideToHome={slideToHome}
                slidetoAboutBand={slidetoAboutBand}
                slideToMembers={slideToMembers}
                slideToHistory={slideToHistory}
                slideToTour={slideToTour}
                slideToGallery={slideToGallery}
                slideToFooter={slideToFooter}
            />
            <Hero hero={hero} />
            <AboutBand aboutTheBand={aboutTheBand} />
            <Band bandMembers={bandMembers} />
            <History history={history} />
            <Tour tourSlide={tour} />
            <Gallery gallerySlide={gallery} />
            <Footer footer={footer} />
        </div>
    );
};

export default App;
