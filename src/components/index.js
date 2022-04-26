import React, { Component } from "react";
import { connect } from "react-redux";
import { withCookies } from "react-cookie";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { initToken } from "../actions";

import Main from "./main";
import Register from "./register";

class App extends Component {
  constructor(props) {
    super(props);
    const { cookies } = this.props;
    const token = cookies.get("token") || 0;
    this.props.initToken(token);
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/landing" component={Register} />
            <Route path="/main" component={Main} />
            <Route path="/" component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default withCookies(connect(null, { initToken })(App));
