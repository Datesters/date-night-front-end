import React from 'react';
import { Accordion } from 'react-bootstrap';


class Profile extends React.Component {
  render() {
    return (
      <>
        <h1>Profile Info</h1>
        <h2>Name #1</h2>
        <h2>Name #2</h2>
        <h3>Compatibility</h3>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Favorite restaurant #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Favorite restaurant #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>
    );
  }
}

export default Profile;
