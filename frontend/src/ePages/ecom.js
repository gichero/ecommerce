import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './ecom.actions';

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );
  }
}

const HomePageContainer = ReactRedux.connect(
  state => state.HomePage,
  actions
)(HomePage);

export default HomePageContainer;
