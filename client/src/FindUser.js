// Importing combination
import React, {Component} from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import axios from 'axios'

class FindUser extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            email2:'',
            response:{}
        };
    }
    onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
        this.setState({ [e.target.name]: e.target.value });
      }
      renderAllUser = () => {
        if(Object.keys(this.state.response).length!=0){
        
        return (
          
            <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        >
        <TreeItem nodeId="1" label={this.state.response.email} >
        <TreeItem nodeId="2" label={"name:"+this.state.response.firstname+this.state.response.lastname} />
        <TreeItem nodeId="3" label={"birthdate:"+this.state.response.birthdate} />
        <TreeItem nodeId="4" label={"age:"+this.state.response.age}/>
        <TreeItem nodeId="5" label={"phonenumber:"+this.state.response.phonenumber}/>
        </TreeItem>
        </TreeView>
          );
        }
        
        };
 
    onSubmitFindUser = (e) => {
        e.preventDefault();
        // get our form data out of state
        const {email2} = this.state;
        axios.post('/findUser',{email2})
          .then((result) => {
            let response= result.data
            this.setState({response});
            if(Object.keys(this.state.response).length==0){
              alert('found none');
            }
           
          });
      }
    render()
    {const {email2}=this.state;
            return(
            <div>
            <h2>Find User:</h2>
            <form onSubmit={this.onSubmitFindUser}>
             <label htmlFor="email2">Enter your email</label>
             <input name="email2" type="text" value={email2} onChange={this.onChange}/>
             <button>Find</button><br/>
             <div>{this.renderAllUser()}</div>  
            </form><br/> 
            </div>
        );
  }
} 
 
// Exporting the component
export default FindUser;