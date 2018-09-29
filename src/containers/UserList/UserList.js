import React, { Component } from 'react';

import UserListItem from "../../components/UserListItem/UserListItem";
import "./UserList.css";

class UserList extends Component {
    render() {
        return(
            <div className="row UserList">
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
            </div>
        );
    }
}

export default UserList;