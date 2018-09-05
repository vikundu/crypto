import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Coin extends Component{

    constructor(props){
      super(props);
      this.showCoins = this.showCoins.bind(this);
      this.subscribe = this.subscribe.bind(this);
    } 
    
    subscribe(currency){
      this.props.subscribeUser(currency);
    }
    
    showCoins(){
      return (
        <Card>
              <CardContent>
                <Typography color="textSecondary">
                  Name: {this.props.name}
                </Typography>

                <Typography color="textSecondary">
                  Symbol: {this.props.symbol}
                </Typography>
                <Typography color="textSecondary">
                  Circulating Supply: {this.props.circulating_supply}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={()=> this.subscribe(this.props.name)}>Subscribe</Button>
              </CardActions>
            </Card>    
      );
    }
  

    render(){
        if( this.props.searchText &&
            (this.props.searchText === this.props.name || 
            this.props.searchText === this.props.name.toLowerCase())){
          return this.showCoins();
        }else if(!this.props.searchText){
          return this.showCoins();
        }else{
          return null;
        }
    }
}

export default Coin;