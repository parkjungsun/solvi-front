import React, { Component } from "react";
import { connect } from "react-redux";

import { onpopup, delUser, OFF_POPUP } from "../../../../actions";

class LeaveTeam extends Component {
  leave() {
    const { onpopup, user } = this.props;
    const { active, clicked } = this.props.popup;
    let data = this.props.teamuser;

    const idx = data.findIndex(item => {
      return item.uid === active;
    });
    if (idx > -1) data.splice(idx, 1);

    this.props.delUser(clicked, active, user.token, data);
    onpopup(OFF_POPUP);
  }
  cancel() {
    const { onpopup } = this.props;
    onpopup(OFF_POPUP);
  }
  render() {
    return (
      <div className="leaveteam">
        <h1> leave Team </h1>
        <div>
          <button className="button" onClick={this.leave.bind(this)}>
            예
          </button>
          <button className="button" onClick={this.cancel.bind(this)}>
            아니요
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    popup: state.popup,
    teamuser: state.teamuser
  };
}

export default connect(mapStateToProps, { onpopup, delUser })(LeaveTeam);
