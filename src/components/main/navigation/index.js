import React, { Component } from "react";

import NavFull from "./navFull";
import NavSub from "./navSub";

class Navigation extends Component {
  render() {
    const { onChangeClick } = this.props;
    return (
      <div className="navigation">
        <NavFull onChangeClick={next => onChangeClick(next)} />
        <NavSub onChangeClick={next => onChangeClick(next)} />
      </div>
    );
  }
}

export default Navigation;
