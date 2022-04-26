import React, { Component } from "react";
import { connect } from "react-redux";
import { withCookies } from "react-cookie";

import {
  resize,
  logout,
  FULLNAV,
  SUBNAV,
  PROJECTSPACE,
  NOTICE,
  SETTING
} from "../../../../actions";

import TeacherImg from "../../../../image/main_teacher_default.png";
import StudentImg from "../../../../image/main_student_default.png";
import Project from "../../../../image/main_space.png";
import Notice from "../../../../image/main_notice.png";
import Setting from "../../../../image/main_setting.png";
import Logout from "../../../../image/main_logout.png";
import LogoSub from "../../../../image/thinc_logo_sub.png";

class NavSub extends Component {
  onlogout() {
    const { cookies } = this.props;
    cookies.remove("token");
    this.props.logout();
  }
  render() {
    const { size, user, onChangeClick } = this.props;
    return (
      <div className={size === SUBNAV ? "nav_sub" : "nav_sub none"}>
        {/* TODO: user data 추가 */}
        <div className="nav_userinfo">
          <img
            src={user.auth ? TeacherImg : StudentImg}
            alt="teacher"
            width="60"
            height="60"
          />
        </div>
        <div
          className="nav nav_project"
          onClick={() => onChangeClick(PROJECTSPACE)}
        >
          <img src={Project} alt="projectSpace" width="48" height="48" />
        </div>
        <div className="nav nav_notice" onClick={() => onChangeClick(NOTICE)}>
          <img src={Notice} alt="notice" width="48" height="48" />
        </div>
        <div className="nav nav_setting" onClick={() => onChangeClick(SETTING)}>
          <img src={Setting} alt="setting" width="48" height="48" />
        </div>
        <div className="nav nav_logout" onClick={this.onlogout.bind(this)}>
          <img src={Logout} alt="logout" width="48" height="48" />
        </div>
        <div
          className="nav_logo_mini"
          onClick={() => this.props.resize(FULLNAV)}
        >
          <img src={LogoSub} alt="logo" width="50" height="45" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    size: state.size,
    user: state.user
  };
}

export default withCookies(
  connect(mapStateToProps, { resize, logout })(NavSub)
);
