import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { makeClass, onpopup, OFF_POPUP } from "../../../../actions";

class CreateClass extends Component {
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
    const result = {
      token: this.props.user.token,
      classname: values.classname,
      explain: values.explain
    };
    this.props.makeClass(result);
    this.props.onpopup(OFF_POPUP);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="classname" label="text" component={this.renderField} />
        <Field name="explain" label="text" component={this.renderField} />
        <button className="button" type="submit">
          생성하기
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.classname) {
    errors.classname = "Enter a classname!";
  }
  if (!values.explain) {
    errors.explain = "Enter a explain!";
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default reduxForm({
  validate,
  form: "buildProject"
})(withRouter(connect(mapStateToProps, { makeClass, onpopup })(CreateClass)));
