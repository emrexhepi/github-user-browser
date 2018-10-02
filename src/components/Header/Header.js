import React from 'react';
import { Navbar, NavbarBrand} from 'mdbreact';
import { Link } from "react-router-dom";
// import { BrowserRouter as Router } from 'react-router-dom';


const Header = () => {
  return (
      <Navbar color="mdb-color" dark expand="md" scrolling>
        <div className="container">
          <NavbarBrand href="/">
              <Link to="/" className='text-white'>
                <strong>Github User Browser</strong>
              </Link>
          </NavbarBrand>
        </div>
      </Navbar>
  )
}

export default Header;
