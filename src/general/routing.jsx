import React from "react";

import {Switch, Route} from "react-router-dom";

import Main from "../components/Main";
//import Press from "../components/Press";
//import Love from "../components/Love";

const Routing = ({refs}) => {
    return (
        <Switch>
            <Route
                exact={true}
                path="/"
                render={() => (
                    <Main
                        hero={refs.hero}
                        aboutTheBand={refs.aboutTheBand}
                        bandMembers={refs.bandMembers}
                        history={refs.history}
                        tourSlide={refs.tour}
                        media={refs.media}
                        gallerySlide={refs.gallery}
                    />
                )}
            />
            <Route
                path="**"
                render={() => (
                    <Main
                        hero={refs.hero}
                        aboutTheBand={refs.aboutTheBand}
                        bandMembers={refs.bandMembers}
                        history={refs.history}
                        tourSlide={refs.tour}
                        media={refs.media}
                        gallerySlide={refs.gallery}
                    />
                )}
            />
            {/*<Route path="/press" component={Press} />
            <Route path="/love" component={Love} />*/}
        </Switch>
    );
};

export default Routing;
