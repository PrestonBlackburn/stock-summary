import React from "react";
import Footer from './components/footer';
import Header from './components/header';
import About from './components/about';
import Home from './components/home';
import ViewData from './components/viewData';
import ScrollToTop from './components/scrollToTop';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'


function App() {
  return (
    <Router>
      <ScrollToTop>
      <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/datatable" exact component={ViewData}/>
        </Switch>
      <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
