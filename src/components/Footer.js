import React from 'react';
import '../css/Footer.css';


class Footer extends React.Component {
  render() {
    return (
      <>
        <body className="d-flex flex-column"></body>
        <footer class="mt-auto">
          {`© 2022 ${String.fromCharCode(183)} Code Fellows`}
        </footer>

      </>
    );
  }
}

export default Footer;
