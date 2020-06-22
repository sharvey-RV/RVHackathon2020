import React, { Component } from 'react'; 
import BootstrapTable from 'react-bootstrap-table-next';  
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { Button } from 'react-bootstrap';
import '../css/home.css';
import axios from 'axios';

class MyTable extends Component {  
  constructor() {
    super();
    this.state = {  
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
    ]  
  };
}

makeDeleteCall = (row, rowIndex) => {
  const cmdData = row["Command"];
  const data = { "Command": cmdData }
  console.log(data);
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
    console.log(row);
    return (
      <Button
	onClick={() => {
	  this.makeDeleteCall(row, rowIndex);
	}}>Delete</Button>
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
      </div>
      </React.Fragment>
    );  
  }   
}
  
export default MyTable;
