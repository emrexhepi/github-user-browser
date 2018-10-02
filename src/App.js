import React, { Component } from 'react';
import { Provider } from 'react-redux';
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


// Redux ===========
// imports
import { createStore, combineReducers } from "redux";

// reducers
import userDetailsReducer from "./store/reducers/userDetails";
import usersReducer from "./store/reducers/users";

// combine reducers
const rootReducers = combineReducers({
    userDetails : userDetailsReducer,
    users: usersReducer
})

// create redux store
const store = createStore(rootReducers);

class App extends Component {
  
  render() {
    return (

      <Provider store={store}>
        {/* the below commented router line is for github pages */ }
        {/* <BrowserRouter basename={'/github-user-browser'}> */}
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
      </Provider>
    );
  }
}

export default App;
