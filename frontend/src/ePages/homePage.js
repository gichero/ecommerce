import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './homePage.action';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

class HomePage extends React.Component {
    componentDidMount(){
        this.props.fetchImage();
    }

  render() {
      let display;
      console.log(this.props.userinfo);
      if(!this.props.userinfo){

      display = (
          <div className='loginform'>
          <input onChange={event=>this.props.write(event.target.value,'userlogin')}className='userlogin' type='text'/>
          <input onChange={event=>this.props.write(event.target.value,'passlogin')}className='passlogin' type='text'/>
          <button onClick={()=>this.props.login({user:this.props.userlogin, password: this.props.passlogin})}>Log In</button>
          <button><Link to='/signup'>Sign Up</Link></button>
          </div>
      )

  }else{
      display = (<h3>Welcome {this.props.userinfo.firstname}</h3>);
   }

    return (
        <div className="page">
        {display}
      {this.props.allImages.map((page,idx)=>
            <div className='products' key={idx}>
              <img className='cover'  src={'/media/'+page.image_path}/>
              <h3>{page.name}</h3>
              <h4>${page.price.toFixed(2)}</h4>
              <h4><a href={"/productDetail/"+page.id}/></h4>
              <button><Link to={"/productDetail/"+page.id}>Buy Now!</Link></button>
              <button><Link to={"/productDetail/"+page.id}>Check it out!</Link></button>
            </div>)}
      </div>
    )
  }
}

const HomePageContainer = ReactRedux.connect(
  state => state.HomePage,
  actions
)(HomePage);

export default HomePageContainer;
