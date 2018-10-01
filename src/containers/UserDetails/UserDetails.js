import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

// import components
import Aux from "../../hoc/Auxiliary";
import Loading from "../../UI/Loading/Loading";
import { Fa } from "mdbreact";

import Avatar from "../../components/Avatar/Avatar";
import UserDetailsItem from "../../components/UserDetailsItem/UserDetailsItem";

import "./UserDetails.css"

class UserDetails extends Component {

    componentDidMount() {
        this.props.receiveUserDetails(this.props.match.params.userId);
    }

    render() {

        let content = <Loading />;

        const details = Object.keys(this.props.details).map((key, index)=>{
            return <UserDetailsItem key={`${key}-${index}`} detail={key} value={this.props.details[key]} />
        })

        if(!this.props.loading) {
            content = (
                <Aux>
                    <div className="col-lg-3 col-md-12 mb-r Sidebar">
                        <Avatar
                            img={this.props.details.avatar_url}
                            userName={this.props.details.login}
                            name={this.props.details.name}
                            url={this.props.details.html_url}
                        />
                    </div>

                    <div className="col-lg-9 col-md-12 mb-r text-left Content">
                        <div className="row">
                            <div className="col-12 navigation text-right">
                                <Link
                                    to={{
                                        pathname: '/',
                                        hash : this.props.details.login
                                    }}
                                    className="btn btn-mdb-color Ripple-parent"
                                >
                                    <Fa icon="step-backward" fixed/> Back
                                </Link>
                            </div>
                            <div className="col-12">
                                {details}
                            </div>
                        </div>
                    </div>
                </Aux>
            );
        }

        return (
            <div className="row UserDetails">
                {content}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.userDetails.loading,
        details: state.userDetails.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        receiveUserDetails: (payload) => {
            actionTypes.receiveUserDetails(payload, dispatch)
        },
        onLoaing: (payload) => dispatch({type: actionTypes.LOADING, payload})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);