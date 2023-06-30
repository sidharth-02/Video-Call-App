import React from 'react';
import { Typography, AppBar } from '@mui/material';
import { styled } from '@mui/system';

import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Choices from './components/Choices';

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
});

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  color: '#0c2e67',
  fontWeight: 'bold',
  borderRadius: 15,
  backgroundColor: '#92A8D1',
  margin: '30px 100px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '600px',
  border: '2px solid black',

  '@media (max-width: 600px)': {
    width: '90%',
  },
}));

const App = () => {
  return (
    <Wrapper>
      <StyledAppBar position="static" color="inherit">
        <Typography variant="h2" align="center" sx={{ fontWeight: 600, fontFamily: 'serif', letterSpacing: '2px' }}>
          ALOHA
        </Typography>
      </StyledAppBar>

      <VideoPlayer />
      <Choices>
        <Notifications />
      </Choices>
    </Wrapper>
  );
};

export default App;
