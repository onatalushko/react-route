import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../header';
import Sidebar from '../sidebar';
import Footer from '../footer';
import Main from '../main';

import './app.css';

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Sidebar />
      <Footer />
    </Router>
  );
}

export default App;
