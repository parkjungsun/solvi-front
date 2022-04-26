import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { onpopup, ON_BUILD_TEAM } from "../../../../actions";
import TeamBlock from "./teamblock";

class TeamList extends Component {
  renderTeam() {
    const { onClickChange, clicked } = this.props;
    const datas = this.props.team;
    return _.map(datas, data => {
      return (
        <TeamBlock
          key={data.teamId}
          onClickChange={next => onClickChange(next)}
          data={data}
          clicked={clicked}
        />
      );
    });
  }
  popup() {
    const { onpopup } = this.props;
    onpopup(ON_BUILD_TEAM);
  }
  render() {
    return (
      <div className="teamlist">
        {this.renderTeam()}
        <div className="teamblock add" onClick={this.popup.bind(this)}>
          <p>+ Invite team</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    team: state.team
  };
}

export default connect(mapStateToProps, { onpopup })(TeamList);
