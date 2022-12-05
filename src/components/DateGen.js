import React from 'react';
// import '../css/DateGen.css'
import axios from 'axios';
import DateLocCards from './DateLocCards';
import { Form, Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import Accordion from 'react-bootstrap/Accordion';

class DateGen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      sname: '',
      location: '',
      isError: false,
      hasLoaded: false,
      restaurants: {}
    };
  }

  getLoc = async (loc) => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      let config = {
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/location',
        params: { location: loc },
        headers: {
          'Authorization': `Bearer ${jwt}`
        }
      };
      let locResults = await axios(config);
      this.setState({
        restaurants: locResults.data
      });
      return true;
    }
    return false;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.putUser(this.state.fname, this.state.sname, this.state.location);
    await this.getLoc(this.state.location);
    console.log(this.state.restaurants);
  };

  handleInputChange = (event) => {
    if (event.target.name === 'loc') {
      this.setState({
        location: event.target.value,
      });
    } else if (event.target.name === 'nameOne') {
      this.setState({
        fname: event.target.value,
      });
    } else if (event.target.name === 'nameTwo') {
      this.setState({
        sname: event.target.value,
      });
    }
  };

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
    // console.log(this.props.user);
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Label>
            Location <Form.Control name='loc' type='text' onChange={this.handleInputChange} />
            Your Name <Form.Control name='nameOne' type='text' onChange={this.handleInputChange} />
            Partners Name <Form.Control name='nameTwo' type='text' onChange={this.handleInputChange} />
          </Form.Label>
          <Button type='submit'>Get Date</Button>
        </Form>
        <h3>Results</h3>

        {this.props.user &&
          <>
            <h4>{this.props.user.fname} and {this.props.user.sname}</h4>
            <p>{this.props.user.compPercent}% Compatible</p>
            {this.state.restaurants.length ?
              <Accordion defaultActiveKey="0">
                {
                  this.state.restaurants.map((item, idx) =>
                    <DateLocCards idx={idx} key={idx} locData={item} putNewItemOnArray={this.props.putNewItemOnArray} />
                  )
                }
              </Accordion>
              :
              <h3>No restaurants</h3>
            }
          </>
        }
      </>
    );
  }
}

export default withAuth0(DateGen);
