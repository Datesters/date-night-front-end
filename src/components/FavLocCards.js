import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

class FavLocCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const data = this.props.locData;
    const idx = this.props.idx;

    return (
      <>
        <Accordion.Item eventKey={idx}>
          <Accordion.Header>{data.name}</Accordion.Header>
          <Accordion.Body>
            {data.rating}
          </Accordion.Body>
          <Accordion.Body>
            <Button onClick={() => this.props.removeItem(data)}>Favorite</Button>
          </Accordion.Body>
        </Accordion.Item>
      </>
    );
  }
}

export default FavLocCards;
