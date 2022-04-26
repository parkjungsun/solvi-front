import React, { Component } from "react";

class TeamBlock extends Component {
  render() {
    const { onClickChange, data, clicked } = this.props;
    return (
      <div
        className={clicked === data.teamId ? "teamblock clicked" : "teamblock"}
        onClick={() => onClickChange(data.teamId)}
      >
        <p>{data.teamname}</p>
      </div>
    );
  }
}

export default TeamBlock;
