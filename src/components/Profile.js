import React from 'react';
import { Accordion, Card, Button} from 'react-bootstrap';
import {useAccordionButton} from 'react-bootstrap/AccordionButton';
// import '../css/Profile.css';

function ContextAwareToggle({
  children, eventKey, callback
}) {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );
  const isCurrentEventKey = activeEventKey === eventKey;
  return (
    <button
      type='button'
      style={{ backgroundcolor: isCurrentEventKey ? 'pink' : 'lavender' }}
      onClick={decoratedOnClick}>
      {children}
    </button>
  );
}


class Profile extends React.Component {
  render() {
    return (
      <>
        <h1>Profile Info</h1>
        <h2>Name #1</h2>
        <h2>Name #2</h2>
        <h3>Compatibility</h3>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>businessName
              <ContextAwareToggle eventKey='0'>Click here</ContextAwareToggle>
            </Card.Header>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              RestaurantInfo
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Accordion.Collapse eventKey='0'></Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>businessName#2
              <ContextAwareToggle eventKey='1'>Click here</ContextAwareToggle>
            </Card.Header>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              RestaurantInfo#2
              <Button variant="primary">Go somewhere#2</Button>
            </Card.Body>
            <Accordion.Collapse eventKey='1'></Accordion.Collapse>
          </Card>
          {/* {this.props.userData && ()} */}
        </Accordion>
      </>
    );
  }
}

export default Profile;
