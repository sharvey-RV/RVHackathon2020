import React, { Component } from 'react';
import MyTable from './components/MyTable';
import MyForm from './components/MyForm';
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
            <Route exact path='/View' >
              <MyTable/>
            </Route>
            <Route exact path='/Add'>
	      <MyForm handleSubmit={this.handleSubmit}/>
	    </Route>
            <Route exact path='/Doc'>
	      <Home/>
	    </Route>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App
