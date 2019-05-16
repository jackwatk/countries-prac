import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from './pages/Detail';
import Countries from './pages/Countries';
import { BrowserRouter } from "react-router-dom";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Router>
      <Switch>
        <div className="main">

        <Route path="/" component={Countries}/>
        <Route path="/:id" component={Detail}/>

        </div>
      </Switch>
    </Router>
    </BrowserRouter>


    );
  }
}

export default App;
