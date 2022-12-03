import React from 'react';
// import '../css/DateGen.css'
import DateLocCards from './DateLocCards';
import { Form, Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class DateGen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      sname: '',
      location: '',
      isError: false
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    // this.props.putUser(this.state.fname, this.state.sname, this.state.location);
    this.props.getUser();
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

  // componentDidMount () {
  //   console.log('mounted');
  //   this.props.getUser();
  // }

  render() {
    console.log(this.props.user);
    return (
      <>
        {this.props.user ?
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
            {/* <h4>{this.props.user[0].compPercent}</h4> */}
            <DateLocCards />
          </>
          :
          <>
            {/* Rendered data from userData */}
          </>
        }
      </>
    );
  }
}

export default withAuth0(DateGen);
