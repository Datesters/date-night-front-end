import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="landing-img"
              src="https://images.unsplash.com/photo-1569929233287-f0565228c4d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
            />
            <Carousel.Caption>
              <p>We will take you to places to dine, laugh and fall in love.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="landing-img"
              src="https://images.unsplash.com/photo-1529543544282-ea669407fca3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <p>We are here to help take the hassle out of finding the date location of a lifetime in your area!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="landing-img"
              src="https://images.unsplash.com/photo-1615500025837-cf3a8716c83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="Third slide"
            />

            <Carousel.Caption>
              <p>
                Click on "Plan a Date" to continue, to view your saved results and leave a review click on "Profile".
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default withAuth0(Main);
