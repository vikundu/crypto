import React, { Component } from 'react';
import './App.css';
import LogIn from './logIn.js';
import CoinsList from './coinsList';
import { connect } from 'react-redux';
import { login } from '../redux/actions';


class App extends Component {
  
  constructor(){
    super();
    this.handleLogin = this.handleLogin.bind(this);
  }
  
  handleLogin(user){
    
    if(user){
      let {displayName, email, ...rest} = user;
      this.props.login({displayName, email});
    }
  }
  
  render() {
    
    if(!this.props.isLoggedIn){
      return(
        <LogIn handleLogin = {this.handleLogin}/>  
      ); 
    }else{
      return (
          <CoinsList />    
          
        );
    }
  }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        isLoggedIn: state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
  
    return {
        login: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
