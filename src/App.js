import React, { Component } from 'react';
import Form from './Form';

class App extends Component {

    handleSubmit = command => {
    	//send to backend
    }

    render() {
      //const { characters } = this.state
    
      return (
        <div className="container">
          <Form handleSubmit={this.handleSubmit} />
        </div>
      )
    }
  }

export default App
