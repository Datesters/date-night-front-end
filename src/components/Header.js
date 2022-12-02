import React from 'react';
import { Button, Image } from 'react-bootstrap';
import NavBar from './NavBar.js';
import '../css/Header.css';


class Header extends React.Component {
  render() {
    return (
      <>
        <div id='header'>
          <Image id="icon" src="/Profile-image/datestersIcon.png"/>
          <h1>Datesters</h1>
          {/*TODO: add conditional logic for login vs. logout button display */}
          <Button variant="primary">Log In</Button>
        </div>
        <NavBar />
      </>
    );
  }
}

export default Header;
