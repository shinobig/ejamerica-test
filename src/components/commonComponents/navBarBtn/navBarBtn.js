import React from 'react';

const navBarBtn = (props) => (
  <div className="row justify-content-md-center">
    <button className="col-md-8 side-nav-btn" onClick={props.action}>
      {props.name}
    </button>
  </div>
);

export default navBarBtn;
