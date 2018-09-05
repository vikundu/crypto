import React, { Component } from 'react';

class SearchBar extends Component{
    
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(){
        this.props.onUserInput(
            this.refs.searchTextInput.value
        );
    }
    
    render(){
        return(
            <form>
                <input
                  type="text"
                  placeholder="Search..."
                  value={this.props.searchText}
                  ref="searchTextInput"
                  onChange={this.handleChange}
                />
            </form>
        );
    }
}

export default SearchBar;