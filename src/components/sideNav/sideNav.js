import React, { Component } from 'react'
import { connect } from 'react-redux';
import { showAllUsers, deleteAllUsers, addNewUser, createRandomUser } from './sideNavActions';
import NavBarBtn from '../commonComponents/navBarBtn/navBarBtn';

class SideNav extends Component {
  render() {
    let allNavButtons = [];
    for (let key in this.props) {
      allNavButtons.push(<NavBarBtn name={this.props[key].name} action={this.props[key].action} key={this.props[key].id} />)
    };
    return (
      <div className="row side-nav">
        <div className="col-md-12">
          {allNavButtons}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showAllUsers: {
      action: () => dispatch(showAllUsers()),
      name: 'Show all users',
      id: 'button-1'
    },
    deleteAllUsers: {
      action: () => dispatch(deleteAllUsers()),
      name: 'Delete all users',
      id: 'button-2'
    },
    addUser: {
      action: () => dispatch(addNewUser()),
      name: 'Add new user',
      id: 'button-3'
    },
    addRandomUser: {
      action: () => dispatch(createRandomUser()),
      name: 'Add random user',
      id: 'button-4'
    },
  };
};

export default connect(null, mapDispatchToProps)(SideNav);
