import React from 'react';
import { connect } from 'react-redux';

const addEditModal = (props) => {
  return (
    <div className="col-md-12 add-edit-modal">
        <div className="add-edit-modal-background"></div>
        <div className="row  justify-content-md-center">
        <div className="col-md-8 col-xl-8 add-edit-modal-form">
          <h3>Add or edit user</h3>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(addEditModal);
