import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './signup.actions';

class signup extends React.Component{
    render(){
        return(
            <div>
                <div>
                <h2>Sign Up</h2>
                </div>

                <div>
                <label>Username</label>
                <input name='username' onChange={(event)=>this.props.write(event.target.value,'username')}placeholder='username' type='text'/>
                </div>

                <div>
                <label>Email</label>
                <input name='email' onChange={(event)=>this.props.write(event.target.value, 'email')}placeholder='email' type='text'/>
                </div>

                <div>
                <label>First Name</label>
                <input name='firstname' onChange={(event)=>this.props.firstName(event.target.value, 'firstName')}placeholder='first name'type ='text'/>
                </div>

                <div>
                <label>Last Name</label>
                <input name='lastname' onChange={(event)=>this.props.lastName(event.target.value, 'lastName')}placeholder='last name' type='text'/>
                </div>

                <div>
                <label>Password</label>
                <input name='password' onChange={(event)=>this.props.password(event.target.value, 'password')}placeholder='password' type='text'/>
                </div>

                <div>
                <button onClick={()=>this.props.submitForm(this.props.username, this.props.email, this.props.firstname, this.props.lastname, this.props.password)}>Submit</button>
                </div>
            </div>
        )
    }

}

const signupContainer = ReactRedux.connect(
  state => state.signup,
  actions
)(signup);

export default signupContainer;
