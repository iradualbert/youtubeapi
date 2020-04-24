import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';


const videoItem = ({video, onSelectVideo}) => {
    return (
      <Grid item xs={12}>
        <Paper
          style={{ display: "grid", alignItems: "center", cursor: "pointer" }}
          onClick={() =>{onSelectVideo(video)}}
        >
          <img
            src={video.snippet.thumbnails.medium.url}
            width='100%'
            height='auto'
          />
          <Typography variant="subtitle1" noWrap>
            <b>{video.snippet.title}</b>
          </Typography>
        </Paper>
      </Grid>
    );
}

export default videoItem;