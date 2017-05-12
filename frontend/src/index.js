import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';
import HomePageContainer from './ePages/homePage.js';
import homePageReducer from './ePages/homePage.reducer';

import './index.css';

const reducer = Redux.combineReducers({
    HomePage: homePageReducer
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);



class AppLayout extends React.Component {
  render() {

    // a link for each component
    return (
      <div>
        <ul className="nav">
          <h1><IndexLink to="/" activeClassName="active">Buy Comics</IndexLink></h1>
          <input className = 'userLogin' type='text' placeholder='username'/>
          <input className = 'password' type='text' placeholder='password'/>
        </ul>
        <div className="content">
          {this.props.children}
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
      </Route>
    </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
