import React from 'react';
import { Navbar } from 'mdbreact';
import { Link } from "react-router-dom";
// import { BrowserRouter as Router } from 'react-router-dom';


const Header = () => {
  return (
      <Navbar color="mdb-color" dark expand="md" scrolling>
        <div className="container">
              <Link to="/" className='text-white navbar-brand'>
                  <strong>Github User Browser</strong>
              </Link>
        </div>
      </Navbar>
  )
}

export default Header;
