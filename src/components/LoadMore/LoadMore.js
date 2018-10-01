import React from 'react';

import {Button} from "mdbreact";

//import css
import "./LoadMore.css";

const LoadMore = (props) => {

    // load more button
    let content = <Button className="btn btn-sucess Ripple-parent">Load More</Button>;

    if(props.loadingMore) {
        content = "Loading...";
    }

    return (
            props.show ? (
                <div onClick={props.onLoadMore}className="col-12 LoadMore text-center">
                    {content}
                </div>
            )
            : null
    )
}

LoadMore.defaultProps = {
    show: true,
    loadingMore: false,
}

export default LoadMore;
