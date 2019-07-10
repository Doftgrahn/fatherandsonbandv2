import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router} from "react-router-dom";

import "./FatherAndSonBand.scss";

const Header = lazy(() => import("./components/header/header"));
const Routing = lazy(() => import("./general/routing"));
const Footer = lazy(() => import("./components/footer/Footer"));

const FatherAndSonBand = () => {
    return (
        <div className="App">
            <Router>
                <Suspense fallback={<h1>Right with ya, hold on a sec!</h1>}>
                    <Header />
                    <Routing />
                    <Footer />
                </Suspense>
            </Router>
        </div>
    );
};

export default FatherAndSonBand;
