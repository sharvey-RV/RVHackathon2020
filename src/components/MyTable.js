import React, { Component } from 'react'; 
import BootstrapTable, { DeleteButton } from 'react-bootstrap-table-next';  
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
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
    ]  
  };
  this.createDelButton.bind(this);
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

  handleDeleteButtonClick = (onClick) => {
    console.log('This is my custom function for DeleteButton click event');
    //onClick();
  }
  createDelButton = (onClick) => {
    console.log("here");
    return (
      <DeleteButton
        btnText='CustomDeleteText'
        btnContextual='btn-warning'
        className='my-custom-class'
        btnGlyphicon='glyphicon-edit'
        onClick={ () => this.handleDeleteButtonClick(onClick) }/>
    );
  }

  /*const tblOptions = {
    deleteBtn: this.createCustomDeleteButton
  };*/

  render() {  
    const options = {
      deleteBtn: this.createDelButton
    }; 
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
	options= { options } deleteRow
	filter={ filterFactory() } />
      </div>
      </React.Fragment>
    );  
  }   
}
  
export default MyTable;
