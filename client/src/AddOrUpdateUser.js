// Importing combination
import React, {Component} from 'react';
import axios from 'axios'
 
class AddOrUpdateUser extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            firstname: '',
            lastname:'',
            birthdate:'',
            email: '',
            age:'',
            phonenumber:''
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
    
    onSubmitAddOrUpdateUser = (e) => {
        e.preventDefault();
        // get our form data out of state
        const {firstname, lastname, birthdate, email, age, phonenumber} = this.state;
    
        axios.post('/addOrUpdateUser', { firstname, lastname, email, birthdate, age, phonenumber})
          .then((result) => {
            
            alert(result.data)
            //access the results here....
          });
      }
 
    render()
    {const { firstname, lastname, email, birthdate, age, phonenumber} = this.state;
     return(<div>
        <h2>Add or Update User:</h2>
        <form onSubmit={this.onSubmitAddOrUpdateUser}>
        <label htmlFor="firstname">Enter first name</label>
        <input name="firstname" type="text" value={firstname} onChange={this.onChange}/>
        <label htmlFor="lastname">Enter last name</label>
        <input name="lastname" type="text" value={lastname} onChange={this.onChange}/><br/><br/>
        <label htmlFor="email">Enter your email</label>
        <input name="email" type="text" value={email} onChange={this.onChange}/>
        <label htmlFor="birthdate">Enter birthdate</label>
        <input name="birthdate" type="text" value={birthdate} onChange={this.onChange}/><br/><br/>
        <label htmlFor="age">Enter age</label>
        <input name="age" type="number" value={age} onChange={this.onChange}/>
        <label htmlFor="phonenumber">Enter phone number</label>
        <input name="phonenumber" type="number" value={phonenumber} onChange={this.onChange}/><br/><br/>
        <br/>
        <button>Add/Update</button>
       </form><br/>
       </div>
     );   
  }
} 
 
// Exporting the component
export default AddOrUpdateUser;