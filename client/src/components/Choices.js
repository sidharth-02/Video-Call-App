import React, { useContext, useState } from 'react'
import { Button, TextField, Grid, Typography, Paper, Container } from '@mui/material'
import { styled } from '@mui/system';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { SocketContext } from '../SocketContext';
import Notifications from './Notifications';

const StyledContainer = styled(Container)({
  width: '650px',
  margin: '35px 0',
  padding: 0,
  '@media (max-width: 600px)': {
    width: '80%',
  },
});

const StyledPaper = styled(Paper)({
  padding: '10px 20px',
  border: '2px solid black',
});

const StyledGridContainer = styled(Grid)({
  width: '100%',
  display: 'flex',
  '@media (max-width: 600px)': {
    flexDirection: 'column',
  },
});

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
});


function Choices( {children} ) {
  
  const {me, callAccepted, name, setName, callEnded, leaveCall, callUser} = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <StyledContainer>
      <StyledPaper elevation={10}>
        <StyledForm noValidate autoComplete='off'>
          <StyledGridContainer >
            <Grid item xs={12} md={6} sx={{ padding: '20px' }}>
              <Typography gutterBottom variant='h6' sx={{ fontWeight: 600, fontFamily: 'serif', letterSpacing: '0px' }}>Accont Info</Typography>
              <TextField label = 'Name' value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me} sx={{ marginTop: '20px', backgroundColor: 'black', '&:hover': { backgroundColor: 'grey' } }}>
                <Button color="primary" variant="contained" fullWidth startIcon={<AssignmentIcon fontSize='large' />} >
                  Copy Your Id
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} sx={{ padding: '20px' }}>
              <Typography gutterBottom variant='h6' sx={{ fontWeight: 600, fontFamily: 'serif', letterSpacing: '0px' }}>Make a call</Typography>
              <TextField label='ID to call' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              { callAccepted && !callEnded ? (
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    fullWidth 
                    startIcon={<PhoneDisabledIcon fontSize='large' />}
                    onClick={leaveCall}
                    sx={{
                      marginTop: '20px',
                      backgroundColor: '#BC243C',
                      '&:hover': { backgroundColor: '#DD4124' }
                    }}
                  >
                    Hang Up
                  </Button>
              ): (
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    startIcon={<PhoneIcon fontSize='large' />}
                    onClick={() => callUser(idToCall)}
                    sx={{
                      marginTop: '20px', 
                      backgroundColor: '#88B04B', 
                      '&:hover': { backgroundColor: '#009B77'} 
                    }}
                  >
                    Call
                  </Button>
              ) }
            </Grid>
          </StyledGridContainer>
        </StyledForm>
        < Notifications />
      </StyledPaper>
    </StyledContainer>
  )
}

export default Choices

