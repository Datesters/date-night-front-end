import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Accordion from 'react-bootstrap/Accordion';
import FavLocCards from './FavLocCards';
// import '../css/Profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLoaded: false
    };
  }

  // componentDidUpdate() {
  //   const onMount = async () => {
  //     const user = await this.props.getUser();
  //     this.setState({
  //       hasLoaded: true
  //     });
  //     console.log(user);
  //   };
  //   if (!this.state.hasLoaded) {
  //     onMount();
  //   }
  // }

  render() {
    return (
      <>
        {this.props.user.favoriteRestaurant &&
          <>
            <h1>{this.props.user.fname}</h1>
            <h1>&</h1>
            <h1>{this.props.user.sname}</h1>
            <h2>You've chosen {this.props.user.location} as your location.</h2>
            <h2> You are {this.props.user.compPercent}% compatible! 💕</h2>
            <Accordion defaultActiveKey="0">
              {
                this.props.user.favoriteRestaurant.map((item, idx) =>
                  <FavLocCards idx={idx} key={idx} locData={item} removeItem={this.props.removeItem} />
                )
              }
            </Accordion>
          </>
        }
      </>
    );
  }
}

export default withAuth0(Profile);
