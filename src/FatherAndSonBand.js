import React, { lazy, Suspense, useEffect } from 'react';
import { Router } from 'react-router-dom';

import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

/* Styles */
import './FatherAndSonBand.scss';

/*Components*/
const Header = lazy(() => import('./components/header/header'));
const Routing = lazy(() => import('./general/routing'));
const Footer = lazy(() => import('./components/footer/Footer'));

ReactGA.initialize('UA-153619692-1');

const history = createBrowserHistory();
history.listen(location => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname + location.search);
});

const FatherAndSonBand = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <div className='App'>
            <Router history={history}>
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
