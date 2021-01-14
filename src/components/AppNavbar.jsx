import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';

function AppNavbar() {
  return(
    <Navbar color="light" light expand="md">
        <NavbarBrand><Link class="nav-link" to="/">Pizzeria</Link></NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link class="nav-link" to="/order/pizza">Pizza</Link>
            </NavItem>
            <NavItem>
              <Link class="nav-link" to="/order/calzone">Calzone</Link>
            </NavItem>
            <NavItem>
              <Link class="nav-link" to="/ingredients">Ingredients</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
}

export default AppNavbar;