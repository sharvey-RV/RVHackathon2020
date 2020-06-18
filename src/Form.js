import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super();
    //this.state = {
	//commandID:'',
	//commmandKeyword:'',
	//expectedVal:''
    //}

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    //var AWS = require('aws-sdk');
    event.preventDefault();
    console.log(event.target);
    const data = new FormData(event.target);
    console.log("sending data to backend");
    console.log(data);
    //send to backend

    fetch('/path/to/backend', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
	<div className="commandID">
            <label htmlFor="commandID">Enter command ID: </label>
            <input id="commandID" name="commandID" type="text" />
 	</div>
	<div className="commandKeyword">
	    <label htmlFor="commandKeyword">Enter command keyword: </label>
            <input id="commandKeyword" name="commandKeyword" type="text" />
        </div>
	<div className="expectedVal">
	    <label htmlFor="expectedVal">Enter expected value: </label>
            <input id="expectedVal" name="expectedVal" type="text" />
        </div>
	<div className="submit">
	    <button>Submit!</button>
	</div>
      </form> 
    );
  }
}

export default Form
