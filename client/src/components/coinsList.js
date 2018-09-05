import React, { Component } from 'react';
import axios from 'axios';
import Coin from './coin';
import SearchBar from './searchBar'
import InfiniteScroll from 'react-infinite-scroll-component';
import Notifications from './notifications.js';
import { connect } from 'react-redux';
import { subscribe } from '../redux/actions';

class CoinsList extends Component {
    
    constructor(){
        super();
        this.state = {
            listUrl: 'https://api.coinmarketcap.com/v2/listings/',
            tickerUrl: 'https://api.coinmarketcap.com/v2/ticker/',
            loading: true,
            pagination:{
                start:0,
                limit:20
            },
            data:[],
            searchText:''
        }
        this.getDataFromCoinMarket = this.getDataFromCoinMarket.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.subscribeUser = this.subscribeUser.bind(this);
    }
    
    handleUserInput(searchText){
    
        this.setState(prevState => ({
            searchText: searchText
        }));
    }
    
    subscribeUser(currency){
        this.props.subscribe({user: this.props.user,currency});
    }
    
    getDataFromCoinMarket(){
        let url = this.state.tickerUrl
                    + '?start=' + this.state.pagination.start
                    + '&limit=' + this.state.pagination.limit;
        console.log("url: ",url);
        axios.get(url)
        .then(result => {
            
            let dataArray = this.state.data.slice();
            
            Object.keys(result.data.data).map(item => {
                dataArray.push(result.data.data[item]);
            });
            
            this.setState(prevState =>({
                loading: false,
                pagination: {
                    start : prevState.pagination.start + this.state.pagination.limit,
                    limit : prevState.pagination.limit + 20
                },
                data: dataArray
                
            }));
        })
        
    }
    componentDidMount(){
        this.getDataFromCoinMarket();
    }
    
    render(){
        
        if(this.state.loading){
            return (
                <div> loading </div>
            );
        }else{
            console.log("in coinsList:",this.props.user);
            return (
                <div>
                    <SearchBar onUserInput={this.handleUserInput} searchText={this.state.searchText}/>
                    <InfiniteScroll
                      dataLength={this.state.data.length}
                      next={this.getDataFromCoinMarket}
                      hasMore={true}
                      loader={<h4>Loading...</h4>}
                    >
                      {this.state.data.map((i, index) => (
                        
                        <Coin {...i} key={index} 
                            searchText={this.state.searchText} 
                            subscribeUser={this.subscribeUser} /> 
                      ))}
                    </InfiniteScroll>
                </div>
            );
        }
            
    }
}

const mapStateToProps = state => {
    
    return {
        user: state.user,
        currency: state.currency
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
        subscribe: (data) => dispatch(subscribe(data))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CoinsList);