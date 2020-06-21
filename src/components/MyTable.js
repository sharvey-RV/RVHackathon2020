import React, { Component } from 'react'; 
import BootstrapTable from 'react-bootstrap-table-next';  
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import axios from 'axios';

class MyTable extends Component {  
  state = {  
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
    }]  
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

  render() {  
    return (  
      <div className="container" style={{ marginTop: 50 }}>
	<BootstrapTable
	striped
	hover
	keyField="Command"
	data= { this.state.slackCommands }
	columns= {this.state.columns}
	filter={ filterFactory() } />
      </div>
    );  
  }  
}  
  
export default MyTable;
