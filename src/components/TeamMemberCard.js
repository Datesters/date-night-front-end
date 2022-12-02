import React from 'react';
import { Card } from 'react-bootstrap';
// import '../css/TeamMemberCard.css';


class TeamMemberCard extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.url} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default TeamMemberCard;
