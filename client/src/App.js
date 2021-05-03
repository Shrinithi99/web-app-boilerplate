import React, { Component } from 'react';
import './App.css';
import AddOrUpdateUser from './AddOrUpdateUser.js';
import FindUser from './FindUser';
import GetAllUsers from './GetAllUsers';
import DeleteUser from './DeleteUser';

class App extends Component {
  constructor() {
    super();
    
  }
    
  render() {
    return (
      <div className="App">
        <AddOrUpdateUser/>
        <FindUser/>
       <DeleteUser/>
       <GetAllUsers/>
      </div>
    );
  }
}

export default App;