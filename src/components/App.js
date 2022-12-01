import React from 'react';
import '../css/App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';

class App extends React.Component {
  render() {
    return(
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>
    );
  }
}
export default App;
