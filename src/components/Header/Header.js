import React from 'react';
import { Navbar, NavbarBrand} from 'mdbreact';
// import { BrowserRouter as Router } from 'react-router-dom';


const Header = () => {
  return (
      <Navbar color="mdb-color" dark expand="md" scrolling>
        <div className="container">
          <NavbarBrand href="/">
              <strong>Github User Browser</strong>
          </NavbarBrand>
        </div>
      </Navbar>
  )
}

export default Header;
