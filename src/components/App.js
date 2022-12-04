import React from 'react';
import '../css/App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import DateGen from './DateGen';
import About from './About';
import Profile from './Profile';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  putUser = async (fname, sname, location) => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      let config = {
        method: 'put',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/user',
        params: { fname: fname, sname: sname, location: location },
        headers: {
          'Authorization': `Bearer ${jwt}`
        }
      };
      let userResults = await axios(config);
      this.setState({
        user: userResults.data
      });

    }
  };

  getUser = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      let config = {
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/user',
        headers: {
          'Authorization': `Bearer ${jwt}`
        }
      };
      let userResults = await axios(config);
      this.setState({
        user: userResults.data[0]
      });
      return true;
    }
    return false;
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    return (
      <>
        <Container>
          <Router>
            <Header />
            <Routes>
              <Route exact path='/' element={<Main />}></Route>
              <Route exact path='/date' element={<DateGen
                user={this.state.user}
                getUser={this.getUser}
                putUser={this.putUser}
              />}></Route>
              <Route exact path='/about' element={<About />}></Route>
              <Route exact path='/profile' element={<Profile
                user={this.state.user}
                getUser={this.getUser}
              />}></Route>
            </Routes>
          </Router>
        </Container>
        <Footer />
      </>
    );
  }
}
export default withAuth0(App);
