import React from 'react';

import {Button, Fa} from "mdbreact";

//import css
import "./LoadMore.css";

const LoadMore = (props) => {

    // load more button
    let content = <Button className="btn btn-sucess Ripple-parent">Load More</Button>;

    if(props.loadingMore) {
        content = (
            <div>
                <Fa icon="circle-o-notch" spin size="3x" className="text-default" fixed/>
                <span className="sr-only">Loading...</span>
            </div>
        );
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
