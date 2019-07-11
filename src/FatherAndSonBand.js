import React, {lazy, Suspense, useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";

import "./FatherAndSonBand.scss";

const Header = lazy(() => import("./components/header/header"));
const Routing = lazy(() => import("./general/routing"));
const Footer = lazy(() => import("./components/footer/Footer"));

const FatherAndSonBand = () => {
    const [store, setStore] = useState([
        {id: 1, amount: null, price: 15},
        {id: 2, amount: null, price: 15}
    ]);

    const deleteFromBasket = data => {
        const deleteItem = store.map(
            e => (e.id === data.id ? {...e, amount: e.amount === 0 || !e.amount ? 0 : e.amount - 1} : e)
        );
        setStore(deleteItem);
    };

    const addToBasket = data => {
        const filterId = store.map(
            e =>
                e.id === data.id
                    ? {...e, name: data.name, amount: e.amount + 1}
                    : e
        );
        setStore(filterId);
    };

    return (
        <div className="App">
            <Router>
                <Suspense fallback={<h1>Right with ya, hold on a sec!</h1>}>
                    <Header store={store} />
                    <Routing
                        store={store}
                        deleteFromBasket={deleteFromBasket}
                        addToBasket={addToBasket}
                    />
                    <Footer />
                </Suspense>
            </Router>
        </div>
    );
};

export default FatherAndSonBand;
