import React, { Component } from "react";

import { connect } from "react-redux";

import { onpopup, OFF_POPUP, delClass, getMyClass } from "../../../../actions";

class DeleteProject extends Component {
  delete() {
    const cid = this.props.popup.active;
    const { token } = this.props.user;
    let data = this.props.class;

    const idx = data.findIndex(item => {
      return item.cid === cid;
    });
    if (idx > -1) data.splice(idx, 1);

    this.props.delClass(token, cid, data);
    this.props.onpopup(OFF_POPUP);
    this.props.getMyClass(token);
  }
  cancel() {
    const { onpopup } = this.props;
    onpopup(OFF_POPUP);
  }
  render() {
    const { popup } = this.props;
    return (
      <div className="deleteproject">
        <h1> Delete Classroom? </h1>
        <p>{popup.name}</p>
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
    popup: state.popup,
    class: state.class
  };
}

export default connect(mapStateToProps, { onpopup, delClass, getMyClass })(
  DeleteProject
);
