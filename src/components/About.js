import React from 'react';
import TeamMemberCard from './TeamMemberCard.js';
import teamData from '../data/teamMembers.json';
import { withAuth0 } from '@auth0/auth0-react';
// import { Row } from 'react-bootstrap';
// import '../css/About.css';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let teamMembers = teamData.map((member) => (
      <TeamMemberCard className='team' name={member.name} description={member.description} url={member.imageurl} />
    ));
    return (
      <>
        <h2>About us</h2>

        {teamMembers}
      </>
    );
  }
}

export default withAuth0(About);
