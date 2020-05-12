import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import CreateRoom from "./privroutes/CreateRoom";
import Room from "./privroutes/Room";


const Private = (props) => {

    const token = localStorage.getItem("cwcToken");
    if (token) {
        return (
            <BrowserRouter>
              <Switch>
                <Route path="/" exact component={CreateRoom} />
                <Route path="/room/:roomID" component={Room} />
              </Switch>
            </BrowserRouter>
            
        );
    } else {
        return (
            <Redirect to="/login" />
        )
    }
};

export default Private;