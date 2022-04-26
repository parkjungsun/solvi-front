import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { makeTeam, onpopup, OFF_POPUP } from "../../../../actions";

class Form extends Component {
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
      cid: this.props.index.id,
      teamname: values.teamname,
      token: this.props.user.token
    };
    this.props.makeTeam(result);
    this.props.onpopup(OFF_POPUP);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="teamname" label="text" component={this.renderField} />
        <button className="field button" type="submit">
          생성하기
        </button>
      </form>
    );
  }
}
function validate(values) {
  const errors = {};
  if (!values.teamname) {
    errors.teamname = "Enter a teamname!";
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    user: state.user,
    index: state.index
  };
}

export default reduxForm({
  validate,
  form: "MakeTeam"
})(withRouter(connect(mapStateToProps, { makeTeam, onpopup })(Form)));
