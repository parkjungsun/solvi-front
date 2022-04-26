import React, { Component } from "react";
import { connect } from "react-redux";

import { CHAT, getIdea } from "../../../../actions";
import Projectempty from "../../../../image/project_empty.png";

class Userspace extends Component {
  componentDidMount() {
    // const { socket, clicked, getIdea } = this.props;
    // getIdea(clicked);
    // socket.on(CHAT + clicked, data => {
    //   console.log(data);
    // });
  }
  render() {
    return (
      <div className="userspace">
        <img src={Projectempty} alt="project empty" />
      </div>
    );
  }
}

export default connect(null, { getIdea })(Userspace);
