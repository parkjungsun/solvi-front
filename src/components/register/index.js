import React, { Component } from "react";
import { connect } from "react-redux";

import Join from "./join";
import Login from "./login";

import LOGO from "../../image/thinc_logo_main.png";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { nav: 0 };

    const { token } = this.props.user;
    if (token) this.props.history.push("/main");
  }
  shouldComponentUpdate(nextProps, nextState) {
    const token = nextProps.user.token;
    if (token) {
      this.props.history.push("/main");
      return false;
    } else {
      return true;
    }
  }
  onChangeNav(next) {
    this.setState({ nav: next });
  }
  render() {
    return (
      <div className="register">
        <div className="register_left">
          <img src={LOGO} alt="thinc logo" width="210.4" height="270" />
          <p>Share your ideas with THINC, make your project</p>
        </div>
        <div className="register_right">
          <div className="register_bg"></div>
          <Join
            nav={this.state.nav}
            onChangeNav={next => this.onChangeNav(next)}
          />
          <Login
            nav={this.state.nav}
            onChangeNav={next => this.onChangeNav(next)}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Register);
