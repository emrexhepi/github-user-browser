import React from 'react';

// import style
import "./UserDetailsItem.css";

const UserDetailsItem = (props) => {
    // if value is not valid do not display anything
    if(!props.value) {
        return null;
    }

    // remove links with {} values
    if(typeof props.value === "string" && props.value.includes("{") && props.value.includes("}")) {
        return null;
    }
    
    let value = <span className="value"> {props.value}</span>;
    
    // check if value link
    if(typeof props.value === "string" && props.value.includes("http")) {
        value = <a target="_blank" href={props.value}>{props.value}</a>
    }

    // make detail more readable
    let detail = props.detail.split("_");
    detail = detail.map((item)=>{
        return item.charAt(0).toUpperCase() + item.slice(1);
    });
    detail = detail.join(" ");

    return (
        <div className="col-12 UserDetailsItem">
            <div className="row">
                <div className="col-3 text-right">
                    <span className="detail">{detail}:</span> 
                </div>
                <div className="col-9 text-left">
                    {value}
                </div>
            </div>
        </div>
    )
}

export default UserDetailsItem;
