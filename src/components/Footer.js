import React from 'react';
import '../css/Footer.css';


class Footer extends React.Component {
  render() {
    return(
      <>
        <footer>
          {`© 2022 ${String.fromCharCode(183)} Code Fellows`}
        </footer>
      </>
    );
  }
}

export default Footer;
