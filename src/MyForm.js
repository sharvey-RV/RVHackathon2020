import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class MyForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      body: '',
      command: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCmdChange = this.handleCmdChange.bind(this);
    this.handleBodChange = this.handleBodChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    const cmdData = this.state.command;
    const bodData = this.state.body;
    console.log("sending data to backend");
    const data = { "Command": cmdData, "Body": bodData }
    console.log(data);
    fetch('https://h6d3rqs549.execute-api.us-west-1.amazonaws.com/TestProd/addcommand', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  handleCmdChange(event) {
    this.setState({ command: event.target.value });
  }
  handleBodChange(event) {
    this.setState({ body: event.target.value });
  }

  render() {

    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="command">
            <Form.Label htmlFor="command">Enter command: </Form.Label>
            <Form.Control id="command" name="command" placeholder="Command" type="text" onChange={this.handleCmdChange} value={this.state.command} />
          </Form.Group>
          <Form.Group className="body">
            <Form.Label htmlFor="body">Enter body: </Form.Label>
            <Form.Control id="body" name="body" placeholder="Body" type="text" onChange={this.handleBodChange} value={this.state.body} />
          </Form.Group>
          <Button variant="primary" type="submit">Submit!</Button>
        </Form>
      </div>
    );
    /*return (
      <form onSubmit={this.handleSubmit}>
	<div className="command">
	    <label htmlFor="command">Enter command: </label>
            <input id="command" name="command" placeholder="Command" type="text" onChange={this.handleCmdChange} value={this.state.command}/>
        </div>
	<div className="body">
	    <label htmlFor="body">Enter body: </label>
            <input id="body" name="body" placeholder="Body" type="text" onChange={this.handleBodChange} value={this.state.body}/>
        </div>
	<div className="submit">
	    <button>Submit!</button>
	</div>
      </form> 
    );*/
  }
}

export default MyForm
