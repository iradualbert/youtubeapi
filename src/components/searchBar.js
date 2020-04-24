import React, { Component } from 'react'

// material ui
import {Paper, TextField } from '@material-ui/core';

class searchBar extends Component {

    state = {
        searchQuery: 'nitwebwe'
    };

    handleChange = (event) => {
        event.preventDefault();
        this.setState({searchQuery: event.target.value})
        
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const { searchQuery } = this.state;
        const { mainHandleSubmit } = this.props;
        mainHandleSubmit(searchQuery);
        this.setState({searchQuery: ''});
    }

    render() {
        return (
          <Paper style={styles}>
            <form onSubmit={this.handleSubmit}>
              <TextField
                name='search_query'
                value={this.state.searchQuery}
                placeholder="Search....."
                onChange={this.handleChange}
                fullWidth
              ></TextField>
            </form>
          </Paper>
        );
    }
}


const styles = {
  padding: '25px',
};

export default searchBar;