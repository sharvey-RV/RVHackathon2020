import React, { Component } from 'react';
import MyTable from './components/MyTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/header.css';
import Home from './components/Home'
import Header from './components/header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {


  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <Router>
          <Switch>
            <Route exact path='/' >
              <Home />
            </Route>
            <Route exact path='/View'>
	      <MyTable/>
	    </Route>
            <Route path='/about' />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App
