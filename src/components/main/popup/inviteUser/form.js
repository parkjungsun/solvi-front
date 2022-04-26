import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { inviteUser, onpopup, OFF_POPUP } from "../../../../actions";

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
    const { token } = this.props.user;
    const { popup } = this.props;
    const result = {
      email: values.email,
      token: token,
      tid: popup.active
    };
    this.props.inviteUser(result);
    this.props.onpopup(OFF_POPUP);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="email" label="text" component={this.renderField} />
        <button className="field button" type="submit">
          초대하기
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
  return errors;
}

function mapStateToProps(state) {
  return {
    user: state.user,
    popup: state.popup
  };
}

export default reduxForm({
  validate,
  form: "InviteMember"
})(withRouter(connect(mapStateToProps, { inviteUser, onpopup })(Form)));
