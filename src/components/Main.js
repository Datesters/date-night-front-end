import React from 'react';
import { Image } from 'react-bootstrap';

class Main extends React.Component {
  render() {
    return (
      <>
        <h1>Welcome</h1>
        <Image id='landing-img' src="https://via.placeholder.com/400x200" />
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

export default Main;
