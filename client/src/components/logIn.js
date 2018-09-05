import React, { Component } from 'react';
import firebaseApp from '../firebase';
import firebase from 'firebase';
const provider = new firebase.auth.GoogleAuthProvider();

class LogIn extends Component {
    
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(){
        
        firebaseApp.auth().signInWithPopup(provider)
        .then((result) => {
            if(result.credential){
                this.props.handleLogin(result.user);
            }else{
                console.log("else handle submit");
            }
        })
        .catch(function(error) {
        
            console.log("error occurred",error);
             
        });
    }
    
    render(){
        return(
            <div>
                <button type="button" onClick={() => this.handleSubmit()}>Sign in using Google</button>
            </div>    
        );
    }
}


export default LogIn;