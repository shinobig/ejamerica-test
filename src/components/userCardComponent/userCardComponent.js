import React from 'react';

const userCardComponent = (props) => (
  <div className="row justify-content-md-center">
    <div className="col-md-8 col-xl-8 user-card">
      <div className="row">
        <div className="col-md-12 user-card-name">
        {props.userName}
        </div>
      </div>

    </div>

  </div>
);

export default userCardComponent;
