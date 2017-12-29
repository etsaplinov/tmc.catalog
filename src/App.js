import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './containers/Layout';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Layout />
    );
  }
}

export default App;
