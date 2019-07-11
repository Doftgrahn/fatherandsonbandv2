import React from "react";

import {Switch, Route} from "react-router-dom";

import Main from "../components/Main";
import Press from "../components/press/Press";
import Contact from "../components/contact/Contact";
import References from "../components/references/References";
import Shop from "../components/shop/Shop";

const Routing = props => {
    const routing = [
        {path: "/", exact: true, component: Main},
        {path: "/press", exact: false, component: Press},
        {path: "/contact", exact: false, component: Contact},
        {path: "/references", exact: false, component: References},
        {path: "/shop", exact: false, component: Shop},
        {path: "**", exact: true, component: Main}
    ];

    const routeAll = routing.map((route, i) => (
        <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={() => <route.component {...props} />}
        />
    ));

    return <Switch>{routeAll}</Switch>;
};

export default Routing;
