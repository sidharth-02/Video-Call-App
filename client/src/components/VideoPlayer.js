import React, { useContext } from 'react'
import { Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import '../style.css'
import { SocketContext } from '../SocketContext';

const StyledGrid = styled(Grid)({
  width: '550px',
  '@media (max-width: 600px)': {
    width: '300px',
  },
});

const StyledPaper = styled(Paper)({
  padding: '10px',
  border: '2px solid black',
  margin: '10px',
});

const Video = styled('video')({
  width: '100%',
  border: '2px solid black',
  '@media (max-width: 600px)': {
    width: '300px',
  },
});



function VideoPlayer() {
  
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    
    return (
        <StyledGrid >
        {
             (
                <StyledPaper>
                <Grid item xs={12} md={6}>
                <Typography variant='h5' gutterBottom sx={{ fontWeight: 600, fontFamily: 'serif', letterSpacing: '0px' }}>{name || 'Name'}</Typography>
                    <Video playsInline muted className='video-box' ref={myVideo} autoPlay />
                </Grid>
                </StyledPaper>
            )
        }
        {
            callAccepted && !callEnded && (
                <StyledPaper>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h5' gutterBottom>{call.name || 'Name'}</Typography>
                        <Video className='video-box' playsInline ref={userVideo} autoPlay />
                    </Grid>
                </StyledPaper>
            )
        }
        </StyledGrid>
    )
}

export default VideoPlayer;