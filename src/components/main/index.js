import React, { Component } from "react";
import { connect } from "react-redux";
import { withCookies } from "react-cookie";

import {
  userinfo,
  EXPLAIN,
  INPROJECT,
  PROJECTSPACE,
  NOTICE,
  SETTING
} from "../../actions";

import Navigation from "./navigation";
import ProjectSpace from "./projectSpace";
import Explain from "./explain";
import InProject from "./inProject";
import Notice from "./notice";
import Setting from "./setting";
import Popup from "./popup";

class Main extends Component {
  constructor(props) {
    super(props);
    const { cookies } = this.props;

    this.state = {
      clicked: -1
    };

    const { token } = this.props.user;
    if (!token) {
      this.props.history.push("/register");
    } else {
      cookies.set("token", token, { path: "/" });
      this.props.userinfo(token);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    const token = nextProps.user.token;
    if (!token) {
      this.props.history.push("/landing");
      return false;
    } else {
      return true;
    }
  }
  onChangeClick = next => {
    this.setState({ clicked: next });
  };
  render() {
    const { clicked } = this.state;
    return (
      <div className="main">
        <Popup />
        <Navigation onChangeClick={next => this.onChangeClick(next)} />
        <div className="workspace">
          {clicked === EXPLAIN ? <Explain /> : null}
          {clicked === INPROJECT ? <InProject /> : null}
          {clicked === PROJECTSPACE ? (
            <ProjectSpace onChangeClick={next => this.onChangeClick(next)} />
          ) : null}
          {clicked === NOTICE ? <Notice /> : null}
          {clicked === SETTING ? <Setting /> : null}
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

export default withCookies(connect(mapStateToProps, { userinfo })(Main));
