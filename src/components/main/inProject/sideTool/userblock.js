import React, { Component } from "react";
import { connect } from "react-redux";

import Delete from "../../../../image/delete.png";
import Student from "../../../../image/block_numberOfstudent.png";
import Star from "../../../../image/star.png";

import { onpopup } from "../../../../actions";

class Userblock extends Component {
  delete() {
    const { onpopup, info, clicked } = this.props;
    onpopup({ active: info.uid, kind: 6, clicked: clicked });
  }
  blockRender() {
    const { info, size, user } = this.props;
    if (size) {
      return (
        <div className="userblock_nav">
          <img src={Student} alt="student" width="36" height="36" />
          <p className="tooltip">{info.nickname}</p>
        </div>
      );
    } else {
      return (
        <div className="userblock">
          <div className="lll">|||</div>
          <div className="userblock_info">
            <h1>{info.nickname}</h1>
            <p>{info.email}</p>
          </div>
          {user.auth ? (
            <img
              src={Delete}
              alt="delete"
              width="36"
              height="36"
              onClick={this.delete.bind(this)}
            />
          ) : (
            <img
              className={info.uid === user.uid ? "star" : "none"}
              src={Star}
              alt="star"
              width="48"
              height="48"
            />
          )}
        </div>
      );
    }
  }
  render() {
    return this.blockRender();
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { onpopup })(Userblock);
