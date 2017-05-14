import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './signup.actions';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

class Signup extends React.Component{
    render(){
        let object = {
            userName: this.props.userName,
            email: this.props.email,
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            password: this.props.password,
            confPassword: this.props.confPassword
        }
        return(
            <div>

                <h2>Sign Up</h2>

                <label>Username</label>
                <input onChange={(event)=>this.props.write(event.target.value,'username')}placeholder='username' type='text' className='username'/>

                <label>Email</label>
                <input name='email' onChange={(event)=>this.props.write(event.target.value, 'email')}placeholder='email' type='text' className='email'/>

                <label>First Name</label>
                <input name='firstname' onChange={(event)=>this.props.firstName(event.target.value, 'firstName')}placeholder='first name'type ='text'className='firstname'/>

                <label>Last Name</label>
                <input name='lastname' onChange={(event)=>this.props.lastName(event.target.value, 'lastName')}placeholder='last name' type='text' className='lastname'/>

                <label>Password</label>
                <input name='password' onChange={(event)=>this.props.password(event.target.value, 'password')}placeholder='password' type='text' className='password'/>

                <label> Confirm Password</label>
                <input name='confpassword' onChange={(event)=>this.props.confPassword(event.target.value, 'confPassword')}placeholder='confirm password' type='text' className='confpassword'/>

                <button onClick={()=>this.props.signup(object)}>Submit</button>

            </div>
        )
    }
}

const SignupContainer = ReactRedux.connect(
  state => state.Signup,
  actions
)(Signup);

export default SignupContainer;
