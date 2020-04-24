import React, { Component } from 'react';
import VideoItem from './videoItem';
import {uuidv4 } from 'uuid';

// material ui
import { Grid } from '@material-ui/core';



const videoList = ({videos, onSelectVideo}) => {

    if (videos.length === 0) return <div>Loading...</div>
    const listOfVideos = videos.map((video, id) => <VideoItem video={video} key={id} onSelectVideo={onSelectVideo}/>)
    
    return (
      <Grid
        container
        spacing={10}
        styles={{ maxHeight: '200%', overflow: "scroll" }}
      >
        {listOfVideos}
      </Grid>
    );
}

export default videoList;