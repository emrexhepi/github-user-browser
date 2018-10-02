import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";

// import styles
import './App.css';

// import Material Design Bootstrap css
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

// import layout
import MainLayout from "./layouts/MainLayout";
import UserList from "./containers/UserList/UserList";
import UserDetails from './containers/UserDetails/UserDetails';
import Error404 from "./components/Error404/Error404";

class App extends Component {
  render() {
    return (


    // commented router line is for github pages
    // <BrowserRouter basename={'/github-user-browser'}>
    <BrowserRouter>
        <div className="App">
          <MainLayout>
            <Switch>
              <Route path="/user/:userId" component={UserDetails} />
              <Route exact path="/" component={UserList} />
              <Route component={Error404} />
            </Switch>
          </MainLayout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
