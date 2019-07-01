import React from "react";

import {Switch, Route} from "react-router-dom";

import Main from "../components/Main";
import Press from "../components/Press";
import Love from "../components/Love";

const Routing = ({
    hero,
    aboutTheBand,
    bandMembers,
    history,
    tourSlide,
    gallerySlide
}) => {
    return (
        <Switch>
            <Route
                exact={true}
                path="/"
                render={() => (
                    <Main
                        hero={hero}
                        aboutTheBand={aboutTheBand}
                        bandMembers={bandMembers}
                        history={history}
                        tourSlide={tourSlide}
                        gallerySlide={gallerySlide}
                    />
                )}
            />
            <Route path="/press" component={Press} />
            <Route path="/love" component={Love} />
        </Switch>
    );
};

export default Routing;

/*
hero={hero}
aboutTheBand={aboutTheBand}
bandMembers={bandMembers}
history={history}
tourSlide={tour}
gallerySlide={gallery}
*/
