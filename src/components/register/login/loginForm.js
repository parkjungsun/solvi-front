import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { login } from "../../../actions";

class LoginForm extends Component {
  renderField(field) {
    return (
      <div>
        <input
          className="field"
          type={field.label}
          {...field.input}
          placeholder={field.meta.error}
        />
      </div>
    );
  }
  onSubmit(values) {
    this.props.login(values, path => {
      this.props.history.push(`${path}`);
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="email" label="email" component={this.renderField} />
        <Field name="password" label="password" component={this.renderField} />
        <button className="button" type="submit">
          로그인
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "Enter a email!";
  }
  if (!values.password) {
    errors.password = "Enter a password!";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "LoginForm"
})(withRouter(connect(null, { login })(LoginForm)));
