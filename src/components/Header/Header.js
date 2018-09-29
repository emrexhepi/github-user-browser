import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';


const Header = () => {
  return (
      <Navbar color="indigo" dark expand="md" scrolling>
        <div className="container">
          <NavbarBrand href="/">
              <strong>Github User Browser</strong>
          </NavbarBrand>
        </div>
      </Navbar>
  )
}

export default Header;
