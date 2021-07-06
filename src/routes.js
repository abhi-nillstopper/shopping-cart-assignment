import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/navigation_bar";
import LoginPage from "./pages/login";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <NavigationBar>
          <Route path="/" exact component={LoginPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/register" exact component={LoginPage} />
          {/* <Route path="/myrequests" exact component={MyRequests} /> */}
          {/* <Route path="/events" component={EventPage} /> */}
          {/* <Route path="/myparticipation" component={MyParticipation} /> */}
        </NavigationBar>
      </Switch>
    </BrowserRouter>
  );
}
