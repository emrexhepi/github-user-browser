import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {Card, CardImage, CardBody, CardTitle, CardText, Button} from "mdbreact";

import "./UserListItem.css";

const UserListItem = (props) => {
  return (
      <div className="col-lg-4 col-md-12 mb-r UserListItem">
        <Card cascade>
            <CardImage cascade tag="div">
                <div className="header view gradient-card-header mdb-gradient card-cascade text-center">
                </div>
            </CardImage>
            <img
                 src={props.avatar}
                 alt="User"
                 className="img-thumbnail"
            />
            <CardBody cascade>
                <CardTitle>{props.name}</CardTitle>
                <CardText>{props.userName}</CardText>
                <Link to={`/user/${props.userId}`} activeClassName="active" className="btn btn-mdb-color Ripple-parent">Details</Link>
            </CardBody>
        </Card>
      </div>
  )
}

UserListItem.propTypes = {
    userName: PropTypes.string,
    detailsUrl: PropTypes.string
}

UserListItem.defaultProps  = {
    userName: "@username",
    userId: 0,
    name: "Name Surname",
    detailsUrl: "#",
    avatar: "https://help.github.com/assets/images/help/profile/identicon.png"
}

export default UserListItem;
