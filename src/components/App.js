import React from 'react';
import '../css/App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import DateGen from './DateGen';
import About from './About';
import Profile from './Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {}
    };
  }

  //sends this function down to child to save data from child to state
  getData = (userData) => {
    this.setState({
      userData: userData,
    });
  };

  render() {
    return (
      <>
        <Container>
          <Router>
            <Header />
            <Routes>
              <Route exact path="/" element={<Main />}></Route>
              <Route exact path="/date" element={<DateGen
                userData={this.state.userData}
                getData={this.getData}
              />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/profile" element={<Profile
                userData={this.state.userData}
              />}></Route>
            </Routes>
          </Router>
        </Container>
        <Footer />
      </>
    );
  }
}
export default App;
