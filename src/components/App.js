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
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      yelpInfo: []
    };
  }

  //sends this function down to child to save data from child to state
  getData = (userData) => {
    this.setState({
      userData: userData,
    });
  };
  getLocationCity = async () => {
    const cityUrl = `https://googleapi?key=${process.env.GOOGLE_API_SERVER}&q${this.state.searchQuery}`;
    axios.get(cityUrl).then((response) => {
      let cityData = response.data[0];
      this.setState({
        cityObject: response.data[0],
        name: cityData.name
      });
      this.getYelpInfo();
    });
  };
  handleOnChange = (userInput) => {
    this.setState({
      searchQuery: userInput
    });
    console.log(this.state.searchQuery);
  };

  getYelpInfo = async() => {
    try {
      const yelpData = await axios.get(`${process.env.REACT_APP_SERVER}/yelp&q${this.state.searchQuery}`);
      this.setState({
        yelpData: yelpData.data
      });
    } catch (error) {
      this.setState({
        displayRestaurant: false,
        errorMessage: error.response && error.response.status + ': ' + error.response.data.error
      });
    }

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
                userData={this.state.userData} getYelpInfo={this.state.getYelpInfo} getLocationCity={this.state.getLocationCity}
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
