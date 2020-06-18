import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super();
    this.state = {
	body:'',
	command:''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    const {name, value} = event.target
    //const data = new FormData(event.target);
    this.setState({[name]:value});
    const data = this.state;
    console.log("sending data to backend");
    console.log(data);
    fetch('https://h6d3rqs549.execute-api.us-west-1.amazonaws.com/TestProd/addcommand',{
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
	<div className="command">
	    <label htmlFor="command">Enter command: </label>
            <input id="command" name="command" placeholder="Command" defaultValue={this.state.command} type="text"/>
        </div>
	<div className="body">
	    <label htmlFor="body">Enter body: </label>
            <input id="body" name="body" placeholder="Body" defaultValue={this.state.body} type="text"/>
        </div>
	<div className="submit">
	    <button>Submit!</button>
	</div>
      </form> 
    );
  }
}

export default Form
