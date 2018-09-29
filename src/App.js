import React, { Component } from 'react';
import './App.css';

// import Material Design Bootstrap css
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

// import layout
import MainLayout from "./layouts/MainLayout";
//import UserList from "./containers/UserList/UserList";
import UserDetails from './containers/UserDetails/UserDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainLayout>
          <UserDetails />
        </MainLayout>
      </div>
    );
  }
}

export default App;
