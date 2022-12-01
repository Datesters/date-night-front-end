import React from 'react';
// import '../css/DateGen.css';
import axios from 'axios';
import DateLocCards from './DateLocCards';
import { Form, Button } from 'react-bootstrap';

let serverUrl = process.env.REACT_APP_SERVER_URL;

class DateGen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOne: '',
      nameTwo: '',
      loc: '',
      isError: false
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let userCompatiblity = await axios.get(`${serverUrl}/calculator?nameOne=${this.state.nameOne}&nameTwo=${this.state.nameTwo}`);
    console.log(userCompatiblity);
  };

  handleInputChange = (event) => {
    if (event.target.name === 'loc') {
      this.setState({
        loc: event.target.value,
      });
    } else if (event.target.name === 'nameOne') {
      this.setState({
        nameOne: event.target.value,
      });
    } else if (event.target.name === 'nameTwo') {
      this.setState({
        nameTwo: event.target.value,
      });
    }
  };

  render() {
    return (
      <>
        {this.props.userData ?
          <>
            <Form onSubmit={this.handleSubmit}>
              <Form.Label>
                Location <Form.Control name="loc" type="text" onChange={this.handleInputChange} />
                Your Name <Form.Control name="nameOne" type="text" onChange={this.handleInputChange} />
                Partners Name <Form.Control name="nameTwo" type="text" onChange={this.handleInputChange} />
              </Form.Label>
              <Button type="submit">Get Date</Button>
            </Form>
            <h3>Results</h3>
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

export default DateGen;
