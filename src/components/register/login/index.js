import React, { Component } from "react";

import LoginForm from "./loginForm";

class Login extends Component {
  render() {
    const { nav, onChangeNav } = this.props;
    return (
      <div className={nav === 0 ? "login form" : "login form none"}>
        <h1>
          Welcome to <span className="T_word">T</span>
          <span className="H_word">H</span>
          <span className="I_word">I</span>
          <span className="N_word">N</span>
          <span className="C_word">C</span>
        </h1>
        <LoginForm />
        <p onClick={() => onChangeNav(1)}>새 계정 만들기</p>
      </div>
    );
  }
}

export default Login;
