import React, { Component } from "react";
import { connect } from "react-redux";

import BuildProject from "./buildProject";
import BuildTeam from "./buildTeam";
import DeleteProject from "./deleteProject";
import DeleteTeam from "./deleteTeam";
import InviteUser from "./inviteUser";
import LeaveTeam from "./leaveTeam";

class Popup extends Component {
  render() {
    let { popup } = this.props;
    return (
      <div className={popup.active === 0 ? "popup none" : "popup "}>
        {popup.kind === 1 ? <BuildProject /> : null}
        {popup.kind === 2 ? <BuildTeam /> : null}
        {popup.kind === 3 ? <DeleteProject /> : null}
        {popup.kind === 4 ? <DeleteTeam /> : null}
        {popup.kind === 5 ? <InviteUser /> : null}
        {popup.kind === 6 ? <LeaveTeam /> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    popup: state.popup
  };
}

export default connect(mapStateToProps)(Popup);
