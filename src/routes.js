import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ContactUs from "./components/frontend/contactus";
import Dashboard from "./components/frontend/dashboard";
import AboutUs from "./components/frontend/education-details";
import HomePage from "./components/frontend/homepage";
import DefaultLayout from "./layouts/index";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <DefaultLayout>
          <Redirect to="/home" />
        </DefaultLayout>
      </Route>
      <Route path="/home">
        <DefaultLayout>
          <Route path="/home" component={(props) => <HomePage {...props} />} />
        </DefaultLayout>
      </Route>
      <Route path="/contact">
        <DefaultLayout>
          <Route
            path="/contact"
            component={(props) => <ContactUs {...props} />}
          />
        </DefaultLayout>
      </Route>
      <Route path="/about">
        <DefaultLayout>
          <Route path="/about" component={(props) => <AboutUs {...props} />} />
        </DefaultLayout>
      </Route>
      <Route path="/new">
        <DefaultLayout>
          <Route path="/new" component={(props) => <Dashboard {...props} />} />
        </DefaultLayout>
      </Route>
      <Route path="*">
        <DefaultLayout>
                <Redirect to="/home" />
        </DefaultLayout>
      </Route>
    </Switch>
  );
};

export default Routes;
