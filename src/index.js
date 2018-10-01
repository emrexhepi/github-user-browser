import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Redux ===========
// imports
import { Provider } from 'react-redux';
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


ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
