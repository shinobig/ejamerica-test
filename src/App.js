import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import UsersMainContent from './components/usersMainContent/usersMainContent';
import SideNav from './components/sideNav/sideNav';
import AddEdotModal from './components/addEditModal/addEditModal';

class App extends Component {

  render(){
    return (
      <div className="App">
        <div className="row">
          {this.props.showAddEditModal ? (<AddEdotModal />) : ''}
          <div className="col-md-3 col-xl-2 col-sm-12">
            <SideNav />
          </div>
          <div className="col-md-9 col-xl-10 col-sm-12">
            <UsersMainContent />
          </div>
        </div> 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showAddEditModal: state.userInformationReducer.showAddEditModal
  }
}

export default connect(mapStateToProps)(App);
