import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { getTeamUser, onpopup } from "../../../../actions";
import Userblock from "./userblock";

class UserList extends Component {
  popup() {
    const { onpopup, clicked } = this.props;
    onpopup({ active: clicked, kind: 5 });
  }
  renderUser() {
    const { clicked, user, getTeamUser, size } = this.props;
    const datas = this.props.teamuser;
    getTeamUser(user.token, clicked);

    return _.map(datas, data => {
      return (
        <Userblock key={data.uid} info={data} size={size} clicked={clicked} />
      );
    });
  }
  renderList() {
    const { index, size, user } = this.props;
    if (size) {
      return (
        <div className={!index ? "userlist_nav" : "none"}>
          {this.renderUser()}
          {user.auth ? (
            <div
              className="add adduserblock_nav"
              onClick={this.popup.bind(this)}
            >
              <p>+</p>
            </div>
          ) : null}
        </div>
      );
    } else {
      return (
        <div className={!index ? "userlist" : "none"}>
          {this.renderUser()}
          {user.auth ? (
            <div className="adduserblock add" onClick={this.popup.bind(this)}>
              <p>+ Add member</p>
            </div>
          ) : null}
        </div>
      );
    }
  }
  render() {
    return this.renderList();
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    teamuser: state.teamuser
  };
}

export default connect(mapStateToProps, { getTeamUser, onpopup })(UserList);
