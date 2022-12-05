import { Component } from 'react';
import {Button, Accordion, Image} from 'react-bootstrap';

class DateLocCards extends Component {
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
            <Image className="yelp-image" src={data.image}></Image>
            <h2>{data.name}</h2>
            <p>⭐️: {data.rating}</p>
            <p>📍: {data.address}</p>
            <p>📞: {data.phoneNumber}</p>
            {data.description}
          </Accordion.Body>
          <Accordion.Body>
            <Button onClick={() => this.props.putNewItemOnArray(data)}>Favorite</Button>
          </Accordion.Body>
        </Accordion.Item>
      </>
    );
  }
}

export default DateLocCards;
