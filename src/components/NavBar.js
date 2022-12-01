import React from 'react';
import {Nav} from 'react-bootstrap';
import '../css/NavBar.css';

class NavBar extends React.Component {
  render() {
    return(
      <Nav activeKey="/">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/date">Plan a Date</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about-us">About Us</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default NavBar;
