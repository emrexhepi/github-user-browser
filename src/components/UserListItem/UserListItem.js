import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {Card, CardImage, CardBody, CardTitle, Animation } from "mdbreact";

import "./UserListItem.css";

class UserListItem extends Component {
    constructor(props) {
        super(props);
        this.focusRef = null;
        if(this.props.autofocus) {
            this.focusRef = React.createRef();
        }
    }

    focusThis = ()=> {
        if(this.props.autofocus) {
            this.focusRef.current.scrollIntoView(false);
        }
    }

    render() {
        const animIteration = this.props.autofocus ? 1: 0;
        return <div id={this.props.userName} ref={this.focusRef} onLoad={this.focusThis}className="col-lg-3 col-md-12 mb-r UserListItem">
                <Animation type="bounce" count={animIteration} >
                    <Card cascade>
                        <CardImage cascade tag="div">
                            <div className="header view gradient-card-header mdb-gradient card-cascade text-center">
                            </div>
                        </CardImage>

                        <img
                            src={this.props.avatar}
                            alt="User"
                            className={`img-thumbnail`}
                            />
                        <CardBody cascade>
                            <CardTitle>@{this.props.userName}</CardTitle>
                            <Link to={`/user/${this.props.userName}`} className="btn btn-mdb-color Ripple-parent">Details</Link>
                        </CardBody>
                    </Card>
                </Animation>
            </div>
  }
}

UserListItem.propTypes = {
    userName: PropTypes.string,
    detailsUrl: PropTypes.string
}

UserListItem.defaultProps  = {
    userName: "@username",
    userId: 0,
    avatar: "https://help.github.com/assets/images/help/profile/identicon.png",
    autofocus: false
}

export default UserListItem;
