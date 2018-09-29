import React from 'react';
import PropTypes from 'prop-types';

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
                <Button href={props.detailsUrl} color="mdb-color">Details</Button>
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
    name: "Name Surname",
    detailsUrl: "#",
    avatar: "https://help.github.com/assets/images/help/profile/identicon.png"
}

export default UserListItem;
