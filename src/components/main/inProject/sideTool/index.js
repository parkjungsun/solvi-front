import React, { Component } from "react";
import { connect } from "react-redux";

import { onpopup } from "../../../../actions";
import Delete from "../../../../image/block_delete.png";
import UserList from "./userList";

class SideTool extends Component {
  popup() {
    const { onpopup, clicked, onClickChange } = this.props;
    onpopup({ active: clicked, kind: 4 });
    onClickChange(0);
  }
  render() {
    const { clicked, size, user } = this.props;
    return (
      <div className={size ? "sidetool_nav" : "sidetool"}>
        <UserList clicked={clicked} size={size} />
        {user.auth ? (
          <div className="sidetool_delete" onClick={this.popup.bind(this)}>
            {size ? (
              <img src={Delete} alt="delete" width="36px" height="36" />
            ) : (
              <p>Remove team</p>
            )}
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    size: state.size
  };
}

export default connect(mapStateToProps, { onpopup })(SideTool);
