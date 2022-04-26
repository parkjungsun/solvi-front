import React, { Component } from "react";
import { connect } from "react-redux";

import { onpopup, OFF_POPUP } from "../../../../actions";
import Form from "./form";

class BuildProject extends Component {
  popup() {
    const { onpopup } = this.props;
    onpopup(OFF_POPUP);
  }
  render() {
    return (
      <div className="buildproject">
        <h1>Build a Classroom</h1>
        <Form />
        <p onClick={this.popup.bind(this)}>취소</p>
      </div>
    );
  }
}

export default connect(null, { onpopup })(BuildProject);
