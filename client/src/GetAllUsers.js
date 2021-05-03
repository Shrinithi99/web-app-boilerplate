// Importing combination
import React, {Component} from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import axios from 'axios' 
class GetAllUsers extends Component {
    constructor(props)
    {
        super(props);
        this.state = { response:[] };
    }
    onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
        this.setState({ [e.target.name]: e.target.value });
      }
      
      
      onSubmitGetAllUsers = (e) => {
        e.preventDefault();
        // get our form data out of state
        axios.post('/getAllUsers')
          .then((result) => {
            let response= result.data
            
            this.setState({response});
          
          });
      }
      renderAllUser = () => {try{
        
        const responseArray=this.state.response;
        return (
          responseArray.map((user) => (
            <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        >
        <TreeItem nodeId="1" label={user.email} >
        <TreeItem nodeId="2" label={"name:"+user.firstname+user.lastname} />
        <TreeItem nodeId="3" label={"birthdate:"+user.birthdate} />
        <TreeItem nodeId="4" label={"age:"+user.age}/>
        <TreeItem nodeId="5" label={"phonenumber:"+user.phonenumber}/>
        </TreeItem>
        </TreeView>
          )) 
        
        );}catch(error){console.log(error)}
        };
 
    render()
    {
        return (
          <div>  <h2>Get All Users</h2>
       <form onSubmit={this.onSubmitGetAllUsers}>
        <button>Get</button><br/>
        <div>{this.renderAllUser()}</div>
       </form></div>
        );
  }
} 
 
// Exporting the component
export default GetAllUsers;