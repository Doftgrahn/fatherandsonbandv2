import React, {lazy, Suspense, useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";

import "./FatherAndSonBand.scss";

const Header = lazy(() => import("./components/header/header"));
const Routing = lazy(() => import("./general/routing"));
const Footer = lazy(() => import("./components/footer/Footer"));

const FatherAndSonBand = () => {
    const [store, setStore] = useState([
        {id: 1, amount: null},
        {id: 2, amount: null}
    ]);

    const deleteStore = (store, delItem) => {};

    const currentStore = store => setStore(store);

    return (
        <div className="App">
            <Router>
                <Suspense fallback={<h1>Right with ya, hold on a sec!</h1>}>
                    <Header />
                    <Routing
                        store={store}
                        deleteStore={deleteStore}
                        currentStore={currentStore}
                    />
                    <Footer />
                </Suspense>
            </Router>
        </div>
    );
};

export default FatherAndSonBand;
