import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCardComponent from '../userCardComponent/userCardComponent';

class UsersMainContent extends Component {
  render() {
    const userCards = this.props.usersToDisplay.map(user => (<UserCardComponent user={user} userName={user.name} key={`user-card-${user.id}`} id={user.id} />));
    return (
      <div className="row">
        <div className="col-md-12 col-xl-12 col-xs-12 main-users-content">
          <h2 className="intro-title">I am the main component for the users</h2>
          {userCards}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    usersToDisplay: state.userInformationReducer.usersToDisplay,
  }
};

export default connect(mapStateToProps)(UsersMainContent);
