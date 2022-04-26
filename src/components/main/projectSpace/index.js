import React, { Component } from "react";
import { connect } from "react-redux";

import ProjectList from "./projectList";
import { TEACHER, onpopup, ON_BUILD_PROJECT, EXPLAIN } from "../../../actions";
import HOWTOUSE from "../../../image/main_howtouse.png";

class ProjectSpace extends Component {
  popup() {
    const { onpopup } = this.props;
    onpopup(ON_BUILD_PROJECT);
  }
  render() {
    const { user, popup, onChangeClick } = this.props;
    return (
      <div className="projectspace">
        <div className="workspace_header">
          <p>Project space</p>
          <div className="workspace_header_tool">
            <img
              className="howtouse"
              src={HOWTOUSE}
              alt="howtouse"
              width="48"
              height="48"
              onClick={() => onChangeClick(EXPLAIN)}
            />
            <p>How to use?</p>
          </div>
        </div>
        <div className="worspace_body">
          <ProjectList onChangeClick={next => onChangeClick(next)} />
        </div>
        {user.auth === TEACHER ? (
          <div
            className={popup.active === 0 ? "build_team_button" : "none"}
            onClick={this.popup.bind(this)}
          >
            <p>+</p>
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    popup: state.popup
  };
}

export default connect(mapStateToProps, { onpopup })(ProjectSpace);
