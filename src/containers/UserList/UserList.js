import React, { Component } from 'react';

// import components
import Aux from "../../hoc/Auxiliary";
import Loading from "../../UI/Loading/Loading";
import LoadMore from "../../components/LoadMore/LoadMore";
import UserListItem from "../../components/UserListItem/UserListItem";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

import "./UserList.css";

class UserList extends Component {

    componentDidMount() {
        document.title = "Github User Browser";
        if(this.props.users.length === 0) {
           this.props.receiveUsers();
        }
    }

    render() {

        let content = <Loading />;

        const focus = this.props.location.hash.slice(1);

        if(!this.props.loading) {
            content = this.props.users.map((user)=>{
                const autofocus = focus === user.login;
                return <UserListItem
                    autofocus={autofocus}
                    key={user.login}
                    userName={user.login}
                    userId={user.id}
                    avatar={user.avatar_url}
                />
            });
        }

        return(
            <Aux>
                <div className="row UserList">
                    { content }
                </div>
                <LoadMore   
                    show={!this.props.loading}
                    loadingMore = {this.props.loadingMore}
                    onLoadMore={()=>this.props.receiveMoreUsers(this.props.users.length)} />
            </Aux>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        loading: state.users.loading,
        users: state.users.users,
        loadingMore: state.users.loadingMore
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        receiveUsers: () => {
            actionTypes.receiveUsers(dispatch)
        },
        receiveMoreUsers: (currentUsersLength) => {
            actionTypes.receiveMoreUsers(dispatch, currentUsersLength)
        },
        onLoading: (loading) => dispatch({type: actionTypes.LOADING, loading: loading})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);