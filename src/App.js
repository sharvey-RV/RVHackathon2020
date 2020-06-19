import React, { Component } from 'react';
import MyForm from './MyForm';
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/header.css';
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

            <Route path='/about' />
          </Switch>
        </Router>

      </React.Fragment>
    )
  }
}

export default App
