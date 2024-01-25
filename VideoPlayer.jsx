import React, { useContext } from 'react'

import { SocketContext } from '../SocketContext'
import { Grid, Paper, Typography } from '@mui/material';


const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)
    console.log('Stream inside render:', stream);

  return (
      <Grid container>
          {/* {
              stream && myVideo && (
                <Paper >
                    <Grid item xs={12} md={6}>
                        <Typography variant='h5' gutterBottom>{name || 'name'}</Typography>
                        <video playsInline muted ref={myVideo} autoPlay ></video>
                    </Grid>
                </Paper>
              )
          } */}
          <Paper >
                    <Grid item xs={12} md={6}>
                        <Typography variant='h5' gutterBottom>{name || 'name'}</Typography>
                        <video style={{width:'600px'}} playsInline muted ref={myVideo} autoPlay ></video>
                    </Grid>
                </Paper>

          {
              callAccepted && !callEnded && (
                 <Paper >
                        <Grid item xs={12} md={6}>
                            <Typography variant='h5' gutterBottom>{call.name || 'name'}</Typography>
                            <video style={{width:'600px'}} playsInline ref={userVideo} autoPlay ></video>
                        </Grid>
                 </Paper> 
              )
          }
          
          
    </Grid>
  )
}

export default VideoPlayer
