import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { register } from "../../../actions";

class JoinForm extends Component {
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
    this.props.register(values, path => {
      this.props.history.push(`${path}`);
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="nickname" label="text" component={this.renderField} />
        <Field name="email" label="email" component={this.renderField} />
        <Field name="password" label="password" component={this.renderField} />
        <button className="button" type="submit">
          회원가입
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.nickname) {
    errors.nickname = "Enter a nickname!";
  }
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
  form: "JoinForm"
})(withRouter(connect(null, { register })(JoinForm)));
