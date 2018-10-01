import React from 'react';

import "./Loading.css";

const Loading = () => {
  return (
    <div className="Loading text-center align-middle">
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loading;
