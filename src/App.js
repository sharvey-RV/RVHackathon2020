import React, { Component } from 'react';
import MyForm from './components/MyForm';
import MyTable from './components/MyTable';
import NavBar1 from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/header.css';
import redVen from './image/Red-Ventures.jpg';
import slackLogo from './image/slacklogo.png';
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

            <Route path='/about' />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App
