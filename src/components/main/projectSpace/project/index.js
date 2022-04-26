import React, { Component } from "react";
import { connect } from "react-redux";

import { onpopup, enterProject, INPROJECT } from "../../../../actions";

import BlockDelete from "../../../../image/block_delete.png";
import BlockTeacher from "../../../../image/main_space.png";

class Project extends Component {
  popup() {
    const { info, onpopup, user } = this.props;
    if (user.auth) {
      onpopup({ active: info.cid, kind: 3, name: info.classname });
    } else {
      onpopup({ active: user.uid, kind: 6, clicked: info.team });
    }
  }
  enter() {
    const { onChangeClick, enterProject, user, info } = this.props;
    if (user.auth) {
      enterProject({ id: info.cid, name: info.classname });
    } else {
      enterProject({ id: info.team, name: info.teamname });
    }
    onChangeClick(INPROJECT);
  }
  render() {
    const { info, user } = this.props;
    return (
      <div className="project">
        <div className="project_in" onClick={this.enter.bind(this)}>
          <p>{user.auth ? info.classname : info.teamname}</p>
        </div>
        <div>
          <img src={BlockTeacher} alt="teacher" width="24" height="24" />
          <p className="explain">
            {user.auth
              ? info.explain
              : `${info.teamname} 팀과 아이디어 공유하기`}
          </p>
          <img
            src={BlockDelete}
            alt="delete"
            width="24"
            height="24"
            onClick={this.popup.bind(this)}
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

export default connect(mapStateToProps, { onpopup, enterProject })(Project);
