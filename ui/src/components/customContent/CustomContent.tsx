import React from "react";
import {Redirect, Route, Switch } from "react-router-dom";
import {ConnectedAuthentication} from "../authentication/ConnectedAuthentication";
import {ConnectedTask} from "../task/ConnectedTask";
import {ConnectedTasksList} from "../tasksList/ConnectedTasksList";

export const CustomContent = () => (
    <Switch>
        <Route path="/" exact>
            <Redirect to="/tasks" />
        </Route>
        <Route path="/tasks" exact>
            <ConnectedTasksList />
        </Route>
        <Route path="/tasks/:id" exact>
            <ConnectedTask />
        </Route>
        <Route path="/auth" exact>
            <ConnectedAuthentication />
        </Route>
    </Switch>
);