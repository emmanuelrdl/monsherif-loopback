import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import ReactDOM from 'react-dom';
import {Navbar} from './navbar';
import {MainSection} from './mainSection'

// https://github.com/auth0-blog/redux-auth/blob/master/reducers.js

class Home extends Component {
  
  render() {
    const { dispatch, quote, isAuthenticated, errorMessage, isSecretQuote } = this.props
    return (
          <div>
             <Navbar isAuthenticated={isAuthenticated} errorMessage={errorMessage} dispatch={dispatch}/> 
             <MainSection/>
          </div> 
    )
  }
}


const mapStateToProps = (state) => {
   return {
     
   }
};
const mapDispatchToProps = (dispatch) => {
  const { isAuthenticated, errorMessage } = auth
  
  return {
    isAuthenticated,
    errorMessage
  }
};

export default connect(mapStateToProps)(Home);