import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';
import HomePageContainer from './ePages/homePage.js';
import HomePageReducer from './ePages/homePage.reducer';
import ProductDetailContainer from './ePages/productDetail';
import ProductDetailReducer from './ePages/productDetail.reducer';
import SignupContainer from './ePages/signup';
import SignupReducer from './ePages/signup.reducer';
import CheckoutReducer from './ePages/checkout.reducer';
import CheckoutContainer from './ePages/checkout';
import './index.css';


const reducer = Redux.combineReducers({
    HomePage: HomePageReducer,
    ProductDetail: ProductDetailReducer,
    Signup: SignupReducer,
    Checkout: CheckoutReducer
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

class AppLayout extends React.Component {
  render() {

    let topRight;
    console.log(this.props.userinfo);
    if (this.props.userinfo != null){
        topRight = (
            <div className='topRight'>
            <button><Link to="/Checkout">cart</Link></button>
                <h3>{'Welcome' + this.props.userInfo.username}</h3>
            </div>
    );
  }
    //   let topRight = (
    //       <div className = 'topRight'>
    //       <label>Login </label><input className = "userLogin" type = "text" placeholder="userName"/>
    //       <input className = "passLogin" type = "text" placeholder="password"/>
    //       <button><Link to="/signup">Sign Up</Link></button>
    //       </div>
    //   )

    // a link for each component

                return (
    <div>
      <div>
        <div className="navbar">
          <h1><IndexLink to="/" activeClassName="active">Buy Comics</IndexLink></h1>
          {topRight}
        </div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    </div>
    )
  }
}

// Add a route for each component
ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={HomePageContainer}/>
        <Route path="/productDetail/:id" component={ProductDetailContainer}/>
        <Route path="/signup" component={SignupContainer}/>
        <Route path="/checkout" component={CheckoutContainer}/>
      </Route>
    </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
