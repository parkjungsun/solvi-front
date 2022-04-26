import React, { Component } from "react";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";

import { CHAT_SERVER } from "../../../../actions";
import Userspace from "../userspace";
import Sendbox from "../sendbox";
import SideTool from "../sideTool";

class ProjectStudent extends Component {
  constructor(props) {
    super(props);
    const socket = socketIOClient(CHAT_SERVER);
    this.state = { socket: socket };
  }
  render() {
    const { name, id } = this.props.index;
    const { socket } = this.state;
    return (
      <div className="projectstudent">
        <div className="workspace_header student_work_header">
          <p>{name}</p>
        </div>
        <div className="workspace_body">
          <Userspace clicked={id} socket={socket} />
          <SideTool clicked={id} />
        </div>
        <Sendbox clicked={id} socket={socket} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    index: state.index
  };
}

export default connect(mapStateToProps)(ProjectStudent);
