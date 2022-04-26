import React, { Component } from "react";

import JoinForm from "./joinForm";

class Join extends Component {
  render() {
    const { nav, onChangeNav } = this.props;
    return (
      <div className={nav === 1 ? "join form" : "join form none"}>
        <h1>회원가입</h1>
        <JoinForm />
        <p onClick={() => onChangeNav(0)}>뒤로 가기</p>
      </div>
    );
  }
}

export default Join;
