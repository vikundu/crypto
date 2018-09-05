import React, { Component } from 'react';
import axios from 'axios';
import Popup from "reactjs-popup";

class Notifications extends Component {
    
    constructor(props){
        
        super(props);
        
        this.state = {
            notifications:'',
            hasNotifications: false
        }
        
        // this.checkForNotifications = this.checkForNotifications.bind(this);
    
    }
    
    
    // checkForNotifications(){
    //     axios({
    //         method: 'post',
    //         url: '/notifications',
    //         data: {
    //             user: this.props.user
    //         }
    //     })
    //     .then((response) => {
    //         // console.log("axios: ",response.data);
    //         this.setState(prevState => ({
    //           notifications: response.data,
    //           hasNotifications: true
    //         }));
    //     });
    // }
    
    render(){
        
        if(this.state.hasNotifications){
            
            return(
                <Popup trigger={<button> Notifications</button>} position="right center">
                    <div>Notifications:{this.state.notifications.name} subscribed.</div>
                </Popup>
            );
        }else{
            return (
                <Popup trigger={<button> Notifications</button>} position="right center">
                    <div>No new notifications</div>
                </Popup>
            );
        }
    }
}


export default Notifications;