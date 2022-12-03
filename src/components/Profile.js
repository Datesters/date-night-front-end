import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
// import { Accordion, Card, Button} from 'react-bootstrap';
// import {useAccordionButton} from 'react-bootstrap/AccordionButton';
// import '../css/Profile.css';

// function ContextAwareToggle({
//   children, eventKey, callback
// }) {
//   // const { activeEventKey } = useContext(AccordionContext);
//   const decoratedOnClick = useAccordionButton(
//     eventKey,
//     () => callback && callback(eventKey),
//   );
//   const isCurrentEventKey = activeEventKey === eventKey;
//   return (
//     <button
//       type='button'
//       style={{ backgroundcolor: isCurrentEventKey ? 'pink' : 'lavender' }}
//       onClick={decoratedOnClick}>
//       {children}
//     </button>
//   );
// }


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.getUser();
  }

  render() {
    console.log(this.props.user);
    return (
      <>
        <h1>{this.props.user.fname}</h1>
        <h1>{this.props.user.sname}</h1>
        <h2>{this.props.user.location}</h2>
        <h2>{this.props.user.compPercent}</h2>
        {/* <Accordion defaultActiveKey='0'>
          <Card>
            <Card.Header>businessName
              <ContextAwareToggle eventKey='0'>Click here</ContextAwareToggle>
            </Card.Header>
            <Card.Img variant='top' src='holder.js/100px180' />
            <Card.Body>
              RestaurantInfo
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
            <Accordion.Collapse eventKey='0'></Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>businessName#2
              <ContextAwareToggle eventKey='1'>Click here</ContextAwareToggle>
            </Card.Header>
            <Card.Img variant='top' src='holder.js/100px180' />
            <Card.Body>
              RestaurantInfo#2
              <Button variant='primary'>Go somewhere#2</Button>
            </Card.Body>
            <Accordion.Collapse eventKey='1'></Accordion.Collapse>
          </Card>
           {this.props.userData && ()}
        </Accordion> */}
      </>
    );
  }
}

export default withAuth0(Profile);
