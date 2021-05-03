// Importing combination
import React, {Component} from 'react';
import axios from 'axios'
class FindUser extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            email2:'',
            response:''
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
    
    onSubmitFindUser = (e) => {
        e.preventDefault();
        // get our form data out of state
        const {email2} = this.state;
        axios.post('/findUser',{email2})
          .then((result) => {
            let response= result.data
            this.setState({response});
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
             <div>{this.state.response}</div>  
            </form><br/> 
            </div>
        );
  }
} 
 
// Exporting the component
export default FindUser;