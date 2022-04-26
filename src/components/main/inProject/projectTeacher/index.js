import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllTeam } from "../../../../actions";
import TeamList from "../teamList";
import Userspace from "../userspace";
import SideTool from "../sideTool";

class ProjectTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0
    };
    this.onClickChange = this.onClickChange.bind(this);
  }
  componentDidMount() {
    const { index, user, getAllTeam } = this.props;
    getAllTeam(user.token, index.id);
  }
  onClickChange(next) {
    this.setState({ clicked: next });
  }
  render() {
    const { name } = this.props.index;
    const { clicked } = this.state;
    return (
      <div className="projectteacher">
        <div className="workspace_header">
          <p onClick={() => this.onClickChange(0)}>{name}</p>
        </div>
        <TeamList
          clicked={clicked}
          onClickChange={next => this.onClickChange(next)}
        />
        <div className="workspace_body">
          {clicked === 0 ? null : <Userspace clicked={clicked} />}
          {clicked === 0 ? null : (
            <SideTool clicked={clicked} onClickChange={this.onClickChange} />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    index: state.index,
    popup: state.popup
  };
}

export default connect(mapStateToProps, { getAllTeam })(ProjectTeacher);
