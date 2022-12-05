import { Component } from 'react';
import {Button, Accordion, Image} from 'react-bootstrap';

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
            <div className="image-container">
              <Image src={data.image}></Image>
            </div>
            <div className="yelp-info-container">
              {data.rating}
              {data.address}
              {data.phoneNumber}
              {data.description}
            </div>
          </Accordion.Body>
          <Accordion.Body>
            <Button onClick={() => this.props.removeItem(data)}>Remove</Button>
          </Accordion.Body>
        </Accordion.Item>
      </>
    );
  }
}

export default FavLocCards;
