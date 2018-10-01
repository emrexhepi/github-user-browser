import React from 'react';

// import style
import "./Avatar.css";

const Avatar = (props) => {
  return (
    <div className="col-12 Avatar">
        <div className="thumbnail">
            <a target="_blank" href={props.url}>
                <img
                    src={props.img}
                    alt={props.userName}
                    className="img-thumbnail"
                />
            </a>
        </div>
        <div className="details">
            <h4>{props.name}</h4>
            <a target="_blank" href={props.url}>
                <p>@{props.userName}</p>
            </a>
        </div>
    </div>
  )
}

Avatar.defaultProps = {
    img: "https://help.github.com/assets/images/help/profile/identicon.png",
    userName : "username",
    name : "Name Surname",
    url : "#"
}

export default Avatar;
