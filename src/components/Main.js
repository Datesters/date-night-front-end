import React from 'react';
import { Image } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>Welcome</h1>
        <Image id='landing-img' src='https://via.placeholder.com/400x200' />
        <section id='about-app'>
          <h3>About our App</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam vel quam elementum pulvinar etiam. Sed augue lacus viverra vitae congue eu consequat ac. Dignissim enim sit amet venenatis urna cursus.
          </p>
        </section>
      </>
    );
  }
}

export default withAuth0(Main);
