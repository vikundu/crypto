import React, { Component } from 'react';
// import NavBar from './components/NavBar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


class SearchBar extends Component{
    
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
    
        this.props.onUserInput(event.target.value);
        
    }
    
    render(){
        return(
            
        <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="title" color="inherit">
              <form>
                <TextField
                    placeholder="Search..."
                    value={this.props.searchText}
                    onChange={this.handleChange}
                />
            </form>
              </Typography>
            </Toolbar>
      </AppBar>
        );
    }
}

export default SearchBar;