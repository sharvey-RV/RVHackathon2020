import React, { Component } from 'react'; 
import BootstrapTable from 'react-bootstrap-table-next';  
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import axios from 'axios';

class MyTable extends Component {  
  state = {  
    slackCommands: [],  
    columns: [{  
      dataField: 'Command',  
      text: 'Command',
      sort: true,
      filter: textFilter()
    },  
    {  
      dataField: 'Body',  
      text: 'Body',  
      sort:true  
    }]  
  }  
componentWillMount() {
    axios.get('https://h6d3rqs549.execute-api.us-west-1.amazonaws.com/TestProd/getcommands')
      .then(response => {
        this.setState({
          products: response.data
        });
      });
  }  
//componentDidUpdate() {    
    //fetch('https://h6d3rqs549.execute-api.us-west-1.amazonaws.com/TestProd/addcommand',		       {
      //method: 'GET',
    //});    
  //}  
  render() {  
    return (  
      <div className="container" style={{ marginTop: 50 }}>
	<BootstrapTable
	striped
	hover
	keyField='id'
	data= { this.state.slackCommands }
	columns= {this.state.columns}
	filter={ filterFactory() } />
      </div>
    );  
  }  
}  
  
export default MyTable;
