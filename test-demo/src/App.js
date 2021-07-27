
import React from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Beasts from './components/assest/HornedBeasts.json';
import SelectedBeast from './components/SelectedBeast';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: null,
      url: null,
      description: null,
    };
  }

  modalData = (title, url, desc) => {
    this.setState({
      title: title,
      url: url,
      description: desc,
    });
  };

  stateHandleShow = () => {
    this.setState({
      show: true,
    });
  };
  stateHandleHide = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <Container fluid align="center">
        <div>
          <Col>
            <Header />
          </Col>
          <Row>
            <SelectedBeast
              show={this.state.show}
              hide={this.stateHandleHide}
              title={this.state.title}
              url={this.state.url}
              desc={this.state.description}
            />

            <Main
              data={Beasts}
              stateUpdate={this.stateHandleShow}
              modalData={this.modalData}
            />
          </Row>
          <Col>
            <Footer />
          </Col>
        </div>
      </Container>
    );
  }
}

export default App;
