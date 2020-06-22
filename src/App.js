import React, { Component } from 'react';
import MyForm from './components/MyForm';
import MyTable from './components/MyTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/header.css';
import Header from './components/header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {

  handleSubmit = command => {
    //send to backend
  }

  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <Router>
          <Switch>
            <Route exact path='/' >
              <MyForm handleSubmit={this.handleSubmit} />
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
