import React from 'react';
import { connect } from 'react-redux';
import { editUser } from './userCardComponentActions';

const userCardComponent = (props) => (
  <div className="row justify-content-md-center user-card-component">
    <div className="col-md-11 col-xl-8 user-card" onClick={() => props.onUserTabClick(props.id)}>
      <div className="row align-middle">
        <div className="col-md-5 col-xs-12 user-card-name">
          <h4>{props.user.name}</h4>
        </div>
        <div className="col-md-2 col-xs-2 user-card-name">
          <p>Age: {props.user.age}</p>
        </div>
        <div className="col-md-5 col-xs-10 user-card-name">
          <p>Email: {props.user.email}</p>
        </div>
      </div>

    </div>

  </div>
);

const mapDispatchToProps = (dispatch) => ({
  onUserTabClick: id => dispatch(editUser(id))
})

export default connect(null, mapDispatchToProps)(userCardComponent);
