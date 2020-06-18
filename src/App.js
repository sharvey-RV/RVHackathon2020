import React, { Component } from 'react';
import MyForm from './MyForm';
import NavBar1 from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/header.css';
import redVen from './image/Red-Ventures.jpg'
import slackLogo from './image/slacklogo.png'

class App extends Component {

  handleSubmit = command => {
    //send to backend
  }

  render() {
    return (
      <React.Fragment>
        <NavBar1 />
        <div id="diver"></div>
        <div className="header1x">

          <div className="red-head">
            <img src={redVen} id="red-logo" alt="red logo" />
            <img src={slackLogo} id="slacklogo" alt="slack logo" />
          </div>
        </div>
        <div className="container">

          <MyForm handleSubmit={this.handleSubmit} />
        </div>
      </React.Fragment>
    )
  }
}

export default App
