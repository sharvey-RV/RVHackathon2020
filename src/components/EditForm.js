import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../css/home.css'

class EditForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      body: '',
      command: '',
      type: 'endpoint'
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
    const typData = this.state.type;
    console.log("sending data to backend");
    const data = { "Command": cmdData, "Body": bodData, "Type":typData }
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
  handleTypChange = (event) => {
    this.setState({ type: event.target.value });
  }
  render() {

    return (
      <React.Fragment>
      <div className="containerx">
	<h1 style={{ marginTop: "20px" }}>Add Commands</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="command">
            <Form.Label htmlFor="command">Enter Command: </Form.Label>
            <Form.Control id="command" name="command" placeholder="Command" type="text" onChange={this.handleCmdChange} value={this.state.command} />
          </Form.Group>
          <Form.Group className="body">
            <Form.Label htmlFor="body">Enter Body: </Form.Label>
            <Form.Control id="body" name="body" placeholder="Body" type="text" onChange={this.handleBodChange} value={this.state.body} />
          </Form.Group>
          <Form.Group controlId="typeDropdown">
    	    <Form.Label>Choose Type:</Form.Label>
    	    <Form.Control as="select" onChange={this.handleTypChange} value={this.state.type}>
              <option>endpoint</option>
              <option>string</option>
            </Form.Control>
          </Form.Group> 
	  <Button variant="primary" type="submit">Submit!</Button>
        </Form>
      </div>
      </React.Fragment>
    );
  }
}

export default EditForm
