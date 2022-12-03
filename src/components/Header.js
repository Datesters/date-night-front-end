import React from 'react';
import { Image } from 'react-bootstrap';
import NavBar from './NavBar.js';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import '../css/Header.css';
import { withAuth0 } from '@auth0/auth0-react';


class Header extends React.Component {
  render() {
    return (
      <>
        <div id='header'>
          <Image src='https://via.placeholder.com/150x75' />
          <h1>Datesters</h1>
          {/*TODO: add conditional logic for login vs. logout button display */}
          {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
        <NavBar />
      </>
    );
  }
}

export default withAuth0(Header);
