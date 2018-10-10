import React, { Component } from 'react';
import {Container, Button, ButtonGroup, Row, Col} from 'reactstrap';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';



class App extends Component {
  constructor(props)  {
    super(props)
    this.state = {
      books: [],
      authors: []
    }
  }
  
  componentDidMount() {
    this.getBooks();
    this.getAuthors();
  }

  getBooks = () => {
    return fetch("http://localhost:5555/books")
      .then(result => result.json())
      .then(result =>
        this.setState({
          books: result.data
        })
      );
  };
  getAuthors = () => {
    return fetch("http://localhost:5555/authors")
      .then(result => result.json())
      .then(result =>
        this.setState({
          authors: result.data
        })
      );
  };


  render() {
    return (
      
        <Container>
          <Row>
            <Col md="12">
              <Header/>
            </Col>
          </Row>
          <Row>
            <Col sm="2">
              <Sidebar authors={this.props.authors} books={this.state.books}/>
            </Col>
            <Col sm="10">
              Book/Author details here
            </Col>
          </Row>
        </Container>
      
    );
  }
}


export default App;
