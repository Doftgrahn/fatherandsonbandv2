import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import "./App.scss";

import Header from "./components/header/header";
import Routing from "./general/routing";
import Footer from "./components/footer/Footer";

const App = () => {
    const refs = {
        hero: React.createRef(),
        aboutTheBand: React.createRef(),
        bandMembers: React.createRef(),
        history: React.createRef(),
        tour: React.createRef(),
        gallery: React.createRef(),
        media: React.createRef(),
        footer: React.createRef()
    };

    const slideTo = element => {
        window.scrollTo(0, element.current.offsetTop);console.log(element);
    };

    return (
        <div className="App">
            <Router>
                <Header slideTo={slideTo} refs={refs} />
                <Routing refs={refs} />
            </Router>
            <Footer footer={refs.footer} />
        </div>
    );
};

export default App;
