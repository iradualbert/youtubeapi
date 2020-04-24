import React, { Component, Fragment } from "react";

// api
import youtube from "./api/youtube";

// components
import SearchBar from "./components/searchBar";
import VideoList from "./components/videoList";
import VideoDetail from "./components/videoDetail";

// material ui
import { Grid } from "@material-ui/core";

class App extends Component {

  state = {
    videos: [],
    selectedVideo : null
  }

  mainHandleSubmit = async (searchQuery) => {  
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        q: searchQuery,
        maxResults: 50,
        key: "AIzaSyCVc1AKcjWrJXODQqGWLCiuXQKdKqxgsxc",
      } 
    }
    );
    
   if (response.status === 200){
     this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
   }

  }
  onSelectVideo = (video) => {
    this.setState({selectedVideo: video})
  }

  render() {
    const {videos, selectedVideo } = this.state;
    return (
      <Fragment>
        <Grid justify="center" container spacing={10}>
          <Grid item xs={11}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <SearchBar mainHandleSubmit={this.mainHandleSubmit}/>
              </Grid>
              <Grid item xs={8}>
                <VideoDetail video={selectedVideo}/>
              </Grid>
              <Grid item xs={4}>
                <VideoList  videos={videos} onSelectVideo={this.onSelectVideo}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default App;
