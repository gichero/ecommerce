import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './homePage.action';

class HomePage extends React.Component {
    componentDidMount(){
        this.props.fetchImage();
    }

  render() {

    return (
        <div>
              {this.props.allImages.map((page,idx)=>
          <div key={idx}>
              <h3>{page.title}</h3>
              <img className= 'products' src={'/media/'+page.image_path}/>
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
