import React from 'react';

//import components
import Header from "../components/Header/Header";
import Aux from "../hoc/Auxiliary";

const MainLayout = (props) => {
  return (
    <Aux>
      <Header />
      <div className="container">
        <div className="row">
          {props.children}
        </div>
      </div>
    </Aux>
  )
}

export default MainLayout;
