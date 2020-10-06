import React, { Component } from 'react';
import { connect } from 'react-redux';

class addEditModal extends Component {

  render() {
    let title;
    if (this.props.typeOfModal === 'newUser') {
      title = 'Add New User'
    } else {
      title = 'Edit User'
    }
    return (
      <div className="col-md-12 add-edit-modal">
        <div className="add-edit-modal-background"></div>
        <div className="row  justify-content-md-center">
          <div className="col-md-8 col-xl-8 add-edit-modal-form">
            <div className="row">
              <div className="col-md-12">
                <h4>{title}</h4>
              </div>
            </div>
            <span class="fas fa-times"></span>
            <hr />
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <h4>Name</h4>
                <p>Don Juan</p>
              </div>
              <div className="col-md-6 col-xs-12">
                <h4>Age</h4>
                <p>99</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <h4>Relocation</h4>
                <p>Yes</p>
              </div>
              <div className="col-md-6 col-xs-12">
                <h4>Phone</h4>
                <p>999999</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <h4>Email</h4>
                <p>Nombresin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    editableUser: state.userInformationReducer.editableUser,
    typeOfModal: state.userInformationReducer.typeOfModal,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(addEditModal);
