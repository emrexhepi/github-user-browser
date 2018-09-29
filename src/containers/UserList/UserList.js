import React, { Component } from 'react';

// import components
import Aux from "../../hoc/Auxiliary";
import Loading from "../../UI/Loading/Loading";
import UserListItem from "../../components/UserListItem/UserListItem";

import "./UserList.css";

class UserList extends Component {
    state = {
        loading: false
    }
    render() {

        setTimeout(()=>{
            this.setState({
                loading: false,
            })
        }, 2000);

        let content = <Loading />;

        if(!this.state.loading) {
            content = (
                <Aux>
                    <UserListItem />
                    <UserListItem />
                    <UserListItem />
                    <UserListItem />
                    <UserListItem />
                    <UserListItem />
                    <UserListItem />
                    <UserListItem />
                    <UserListItem />
                </Aux>
            );
        }

        return(
            <div className="row UserList">
                { content }
            </div>
        );
    }
}

export default UserList;