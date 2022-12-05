import { Component } from 'react';
import { Button, Accordion, Image } from 'react-bootstrap';

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
            <Image className="yelp-image" src={data.image}></Image>
            <div className="yelp-info">
              <h3>{data.name}</h3>
              <p>⭐️ {data.rating}</p>
              <p>📍 {data.address.join(' ')}</p>
              <p>📞 {data.phoneNumber}</p>
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
