import React from "react";

import {Switch, Route} from "react-router-dom";

import Main from "../components/Main";
import Press from "../components/Press";

const Routing = () => {
    return (
        <Switch>
            <Route exact={true} component={Main} />
            <Route component={Press} />
        </Switch>
    );
};

export default Routing;
