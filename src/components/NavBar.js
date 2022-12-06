import React from 'react';
// import { Nav } from 'react-bootstrap';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <Navbar>
        <NavItem>
          <Link to='/'>Home</Link>
          <Link to='/date'>Plan a Date</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/about'>About Us</Link>
        </NavItem>
      </Navbar>
      // <Nav activeKey='/'>
      //   <Nav.Item>
      //     <Nav.Link to='/'>Home</Nav.Link>
      //   </Nav.Item>
      //   <Nav.Item>
      //     <Nav.Link to='/date'>Plan a Date</Nav.Link>
      //   </Nav.Item>
      //   <Nav.Item>
      //     <Nav.Link to='/profile'>Profile</Nav.Link>
      //   </Nav.Item>
      //   <Nav.Item>
      //     <Nav.Link to='/about'>About Us</Nav.Link>
      //   </Nav.Item>
      // </Nav>
    );
  }
}

export default NavBar;
