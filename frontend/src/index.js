import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';
import HomePageContainer from './ePages/homePage.js';
import homePageReducer from './ePages/homePage.reducer';
import ProductDetailContainer from './ePages/productDetail';
import ProductDetailReducer from './ePages/productDetail.reducer';
import './index.css';


const reducer = Redux.combineReducers({
    HomePage: homePageReducer,
    ProductDetail: ProductDetailReducer
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

class AppLayout extends React.Component {
  render() {
      let topRight = (
          <div className = 'topRight'>
          <input className = "userLogin" type = "text"/>
          <input className = "passLogin" type = "text"/>
          </div>
      )

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
      </Route>
    </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
