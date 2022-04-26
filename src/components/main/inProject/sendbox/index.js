import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { CHAT, addIdea } from "../../../../actions";
import Upload from "../../../../image/file_upload.png";
import Draw from "../../../../image/draw.png";

class Sendbox extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     teamId: this.props.clicked,
  //     idea: "",
  //     usernick: this.props.user.nickname,
  //     type: 0,
  //     like: 0,
  //     state: 0
  //   };
  //   this.onInputChange = this.onInputChange.bind(this);
  //   this.onSubmit = this.onSubmit.bind(this);
  // }
  // onInputChange(event) {
  //   this.setState({ ...this.state, idea: event.target.value });
  // }
  // onSubmit(event) {
  //   event.preventDefault();

  //   const { socket, addIdea } = this.props;

  //   socket.emit(CHAT, this.state);
  //   addIdea(this.state);

  //   this.setState({ ...this.state, idea: "" });
  // }
  render() {
    const { size } = this.props;
    return (
      <form
        className={size ? "sendbox_nav" : "sendbox"}
        onSubmit={this.onSubmit}
      >
        <input
          name="text"
          type="text"
          placeholder="Share your Idea!"
          className="field_two"
          // value={this.state.idea}
          // onChange={this.onInputChange}
        />
        <div className="sendbox_button">
          <button className="sendbox_button_two" type="submit">
            Send
          </button>
        </div>
        <div className="sendbox_button_one">
          <img src={Draw} alt="draw" width="36" height="36" />
        </div>
        <div className="sendbox_button_one">
          <img src={Upload} alt="upload" width="36" height="36" />
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    size: state.size
  };
}

export default reduxForm({
  form: "sendbox"
})(withRouter(connect(mapStateToProps, { addIdea })(Sendbox)));
