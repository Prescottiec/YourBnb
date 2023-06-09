import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import SearchContainer from "./search/search_container";
import PostFormContainer from "./post_form/post_form_container";

const App = () => (
  <div>
    <header>
      <h1>Your BnB</h1>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/posts/new" component={PostFormContainer} />
      <Route exact path="/" component={SearchContainer} />
    </Switch>
  </div>
);

export default App;
