import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
// import '../css/Profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log('mounting ');
    const onMount = async () => {
      const user = await this.props.getUser();
      console.log(user);
    };
    onMount();

    console.log('mounted ');
  }

  render() {
    console.log(this.props.user);

    return (
      <>

        <h1>{this.props.user.fname}</h1>
        <h1>{this.props.user.sname}</h1>
        <h2>{this.props.user.location}</h2>
        <h2>{this.props.user.compPercent}</h2>
      </>
    );
  }
}

export default withAuth0(Profile);
