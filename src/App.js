import React, { Component } from 'react';
import './App.scss';
import UsersMainContent from './components/usersMainContent/usersMainContent';
import SideNav from './components/sideNav/sideNav';
import { initialData } from './model/databaseCreation/dataBaseAccess'

class App extends Component {

  componentWillMount(){
    initialData();
  }
  render(){
    return (
      <div className="App">
        <div className="row">
          <div className="col-md-4 col-xl-2 col-sm-12">
            <SideNav />
          </div>
          <div className="col-md-8 col-xl-10 col-sm-12">
            <UsersMainContent />
          </div>
        </div> 
      </div>
    );
  }
}

export default App;
