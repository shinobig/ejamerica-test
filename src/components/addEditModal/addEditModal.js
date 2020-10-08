/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cancelAddEdit, nameInputHandler, ageInputHandler, emailInputHandler, phoneInputHandler, saveEdit, saveNewUser, relocationInputHandler } from './addEditModalActions';

class addEditModal extends Component {

  render() {
    const {
      name,
      age,
      email,
      phoneNumber,
      relocation,
      imageURL,
    } = this.props.editableUser
    let formatNumber;

    if (phoneNumber !== '') {
      formatNumber = phoneNumber.toString().replace(/(\d{1})(\d{3})(\d{2})(\d{2})(\d{2})/, "+$1($2) $3 $4 $5");
    }

    let title, saveBtn, deleteBtn, errors, enableRelocation, relocationInput;
    if (this.props.modalType === 'newUser') {
      title = 'Add New User';
      saveBtn = (<button className="add-edit-modal-form-btn save" onClick={this.props.onSaveNewUserChange}>Save</button>);
      deleteBtn = '';
    } else {
      title = 'Edit User';
      saveBtn = (<button className="add-edit-modal-form-btn save" onClick={this.props.onSaveEditChange}>Save</button>);
      deleteBtn = (<button className="add-edit-modal-form-btn save" onClick={this.props.onSaveEditChange}>Delete</button>);
    }

    if (this.props.errors.length > 0) {
      errors = this.props.errors.map(error => (<p>{error}</p>));
    }

    if (age > 25 && age < 30) {
      enableRelocation = true;
    }

    return (
      <div className="col-md-12 add-edit-modal">
        <div className="add-edit-modal-background"></div>
        <div className="row  justify-content-md-center">
          <div className="col-md-10 col-xl-10 add-edit-modal-form">
            <div className="row">
              <div className="col-md-12">
                <h4>{title}</h4><span type="button" onClick={this.props.onCloseModal} className="fa fa-times close-icon" aria-hidden="true"></span>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-3 col-xs-12">
                <img alt={name} className="random-image" src={imageURL} width="100%"></img>
              </div>
              <div className="col-md-9">
                <div className="row label-row">
                  <div className="col-md-8 col-xs-12">
                    <label>Name</label>
                    <input type="text" value={name} onChange={event => this.props.onNameInputChange(event)}></input>
                  </div>
                  <div className="col-md-4 col-xs-12">
                    <label>Age</label>
                    <input value={age} onChange={event => this.props.onAgeInputChange(event)} type="number"></input>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-md-8 col-xs-12">
                    <label>Email</label>
                    <input value={email} onChange={event => this.props.onEmailInputChange(event)} type="text"></input>
                  </div>
                  <div className="col-md-4 col-xs-12">
                    <label>Phone</label>
                    <input value={formatNumber} onChange={event => this.props.onPhoneInputChange(event)} type="text"></input>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-md-4 col-xs-12">
                    <label>Relocation</label>
                    {relocation || "" ? (<input type="checkbox" value={"noRelocate"} onChange={event => this.props.onRelocationInputChange(event)} checked disabled={enableRelocation}></input>) : (<input type="checkbox" value={"relocate"} onChange={event => this.props.onRelocationInputChange(event)} disabled={enableRelocation}></input>)}
                  </div>
                  <div className="col-md-8 col-xs-12 btn-flex-box">
                    {saveBtn}
                    <button className="add-edit-modal-form-btn cancel" onClick={this.props.onCloseModal}>
                      Cancel
                    </button>
                    {deleteBtn}
                  </div>
                </div>
              </div>
            </div>
            {errors}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editableUser: state.userInformationReducer.editableUser,
    modalType: state.userInformationReducer.modalType,
    errors: state.userInformationReducer.errors,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseModal: () => dispatch(cancelAddEdit()),
    onNameInputChange: (event) => dispatch(nameInputHandler(event)),
    onAgeInputChange: (event) => dispatch(ageInputHandler(event)),
    onEmailInputChange: (event) => dispatch(emailInputHandler(event)),
    onPhoneInputChange: (event) => dispatch(phoneInputHandler(event)),
    onRelocationInputChange: (event) => dispatch(relocationInputHandler(event)),
    onSaveEditChange: () => dispatch(saveEdit()),
    onSaveNewUserChange: () => dispatch(saveNewUser()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(addEditModal);
