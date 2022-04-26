import React, { Component } from "react";

import { connect } from "react-redux";

import { onpopup, delTeam, OFF_POPUP } from "../../../../actions";

class DeleteTeam extends Component {
  delete() {
    const tid = this.props.popup.active;
    const { token } = this.props.user;
    let data = this.props.team;

    const idx = data.findIndex(item => {
      return item.teamId === tid;
    });
    if (idx > -1) data.splice(idx, 1);

    this.props.delTeam(token, tid, data);
    this.props.onpopup(OFF_POPUP);
  }
  cancel() {
    const { onpopup } = this.props;
    onpopup(OFF_POPUP);
  }
  render() {
    return (
      <div className="deleteteam">
        <h1> Delete Team? </h1>
        <div>
          <button className="button" onClick={this.delete.bind(this)}>
            삭제하기
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
    team: state.team,
    popup: state.popup
  };
}

export default connect(mapStateToProps, { onpopup, delTeam })(DeleteTeam);
