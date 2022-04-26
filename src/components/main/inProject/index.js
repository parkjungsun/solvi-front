import React, { Component } from "react";
import { connect } from "react-redux";

import ProjectTeacher from "./projectTeacher";
import ProjectStudent from "./projectStudent";

class InProject extends Component {
  render() {
    const { user } = this.props;
    return user.auth ? <ProjectTeacher /> : <ProjectStudent />;
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(InProject);
