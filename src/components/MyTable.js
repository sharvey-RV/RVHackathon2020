import React, { Component } from 'react'; 
import Form from 'react-bootstrap/Form';
import BootstrapTable from 'react-bootstrap-table-next';  
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { Button } from 'react-bootstrap';
import '../css/home.css';
import axios from 'axios';

function updateEditState(cmdText) {
  this.setState({command : cmdText})
}

class EditForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      body: '',
      command: '',
      type: 'endpoint'
    }
    updateEditState = updateEditState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBodChange = this.handleBodChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const cmdData = this.state.command;
    const bodData = this.state.body;
    const typData = this.state.type;
    const data = { "Command": cmdData, "NewBody": bodData, "NewType":typData }
    fetch('https://h6d3rqs549.execute-api.us-west-1.amazonaws.com/TestProd/updatecommand', {
      method: 'PUT',
      body: JSON.stringify(data)
    });
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
      <div className="">
	<h1 style={{ marginTop: "20px" }}>Edit Command</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="command">
            <Form.Label htmlFor="command">Enter Command: </Form.Label>
            <Form.Control id="command" name="command" placeholder="Command" type="text" value={this.state.command}/>
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
	<p>(Refresh page to see changes in table)</p>
      </div>
      </React.Fragment>
    );
  }
}
class MyTable extends Component {  
  constructor() {
    super();
    this.state = {  
    editingCmd: "",
    slackCommands: [],  
    columns: [{  
      dataField: "Command",  
      text: "Command",
      sort: true,
      filter: textFilter()
    },  
    {  
      dataField: "Body",  
      text: "Body",  
      sort:true  
    },
    {
      dataField: "Type",
      text: "Type",
      sort: true
    },
    {
      dataField: "Delete",
      text: "Delete",
      formatter: this.linkDelete,
      sort: true
    },
    {
      dataField: "Edit",
      text: "Edit",
      formatter: this.linkEdit,
      sort: true
    },
    ]  
  };
}

makeDeleteCall = (row, rowIndex) => {
  const cmdData = row["Command"];
  const data = { "Command": cmdData }
  fetch("https://h6d3rqs549.execute-api.us-west-1.amazonaws.com/TestProd/deletecommand", {
    method: 'PUT',
    body: JSON.stringify(data)
  });
  this.state.slackCommands.splice(rowIndex,1);  
  this.setState({slackCommands : this.state.slackCommands }, () => {console.log(this.state.slackCommands)});
}

componentDidMount() {
    axios.get('https://h6d3rqs549.execute-api.us-west-1.amazonaws.com/TestProd/getcommands')
      .then(response => {
	console.log(response);
        this.setState({
          slackCommands: response.data
        });
      });
  }

  linkDelete = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Button
	onClick={() => {
	  this.makeDeleteCall(row, rowIndex);
	}}>Delete</Button>
    );
  };

  linkEdit = (cell, row, rowIndex, formatExtraData) => {
    console.log(row);
    updateEditState(row["Command"]);
    return (
      <Button
	onClick={() => {
	  this.setState({editingCmd: row["Command"]}, () => {console.log(this.state.editingCmd)});
	}}>Edit</Button>
    );
  };  

  render() {  
    return (  
      <React.Fragment>
      <div className="containerx">
      <h1 style={{ marginTop: 30 }}>View Commands</h1>
	<BootstrapTable
	striped
	hover
	keyField="Command"
	data= { this.state.slackCommands }
	columns= {this.state.columns}
	filter={ filterFactory() } />
	<div className = "">
	    <EditForm/>
	</div>
      </div>
      </React.Fragment>
    );  
  }   
}



export default MyTable;
