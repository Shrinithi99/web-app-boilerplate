// Importing combination
import React, {Component} from 'react';
import axios from 'axios'
class DeleteUser extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            email3:''
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
    
      onSubmitDeleteUser = (e) => {
        e.preventDefault();
        // get our form data out of state
        const {email3} = this.state;
    
        axios.put('/deleteUser', { email3 })
          .then((result) => {
            
            alert(result.data)
            //access the results here....
          });
      }
    render()
    {const {email3}=this.state;
            return(
            <div>
            <h2>Delete User:</h2>
           <form onSubmit={this.onSubmitDeleteUser}>
           <label htmlFor="email3">Enter your email</label>
           <input name="email3" type="text" value={email3} onChange={this.onChange}/>
           <button>Delete</button>
           </form><br/>
            </div>
        );
  }
} 
 
// Exporting the component
export default DeleteUser;