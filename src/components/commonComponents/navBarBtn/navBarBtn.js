import React from 'react';

const navBarBtn = (props) => (
  <div className="buttons-small">
    <div className="row justify-content-md-center">
      <button className="col-md-8 col-sm-6 side-nav-btn d-none d-sm-block" onClick={props.action}>
        {props.name}
      </button>
    </div>
      <button className="col-sm-6 side-nav-btn d-block d-sm-none" onClick={props.action}>
        {props.name}
      </button>
  </div>

);

export default navBarBtn;
