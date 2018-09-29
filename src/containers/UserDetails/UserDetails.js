import React, { Component } from 'react';
import { Link } from "react-router-dom";

// import components
import Aux from "../../hoc/Auxiliary";
import Loading from "../../UI/Loading/Loading";
import { Fa } from "mdbreact";

import Avatar from "../../components/Avatar/Avatar";
import UserDetailsItem from "../../components/UserDetailsItem/UserDetailsItem";

import "./UserDetails.css"

class UserDetails extends Component {
    state = {
        loading: false,
        details: {
            "login": "emrexhepi",
            "id": 9884700,
            "node_id": "MDQ6VXNlcjk4ODQ3MDA=",
            "avatar_url": "https://avatars2.githubusercontent.com/u/9884700?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/emrexhepi",
            "html_url": "https://github.com/emrexhepi",
            "followers_url": "https://api.github.com/users/emrexhepi/followers",
            "following_url": "https://api.github.com/users/emrexhepi/following{/other_user}",
            "gists_url": "https://api.github.com/users/emrexhepi/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/emrexhepi/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/emrexhepi/subscriptions",
            "organizations_url": "https://api.github.com/users/emrexhepi/orgs",
            "repos_url": "https://api.github.com/users/emrexhepi/repos",
            "events_url": "https://api.github.com/users/emrexhepi/events{/privacy}",
            "received_events_url": "https://api.github.com/users/emrexhepi/received_events",
            "type": "User",
            "site_admin": false,
            "name": "Emrullah Rexhepi",
            "company": null,
            "blog": "",
            "location": null,
            "email": null,
            "hireable": null,
            "bio": null,
            "public_repos": 7,
            "public_gists": 0,
            "followers": 1,
            "following": 0,
            "created_at": "2014-11-21T14:59:03Z",
            "updated_at": "2018-08-30T10:26:08Z"
          }
    }

    render() {

        let content = <Loading />;

        const details = Object.keys(this.state.details).map((key, index)=>{
            return <UserDetailsItem key={`${key}-${index}`} detail={key} value={this.state.details[key]} />
        })

        if(!this.state.loading) {
            content = (
                <Aux>
                    <div className="col-lg-3 col-md-12 mb-r Sidebar">
                        <Avatar
                            img={this.state.details.avatar_url}
                            userName={this.state.details.login}
                            name={this.state.details.name}
                            url={this.state.details.html_url}
                        />
                    </div>

                    <div className="col-lg-9 col-md-12 mb-r text-left Content">
                        <div className="row">
                            <div className="col-12 navigation text-right">
                                <Link to='/' activeClassName="active" className="btn btn-mdb-color Ripple-parent">
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

UserDetails.defaultProps = {
    loading: true
}

export default UserDetails;