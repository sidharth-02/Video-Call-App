import React, { useContext } from 'react'
import { Button } from '@mui/material'

import { SocketContext } from '../SocketContext';

function Notifications() {

  const { answerCall , call, callAccepted } = useContext( SocketContext );


  return (
    <>
      { call.isReceivingCall && !callAccepted && (
          <div style={ {display: 'flex', justifyContent: 'center' }}>
          <h1 style={{ fontFamily: 'serif', fontWeight: 400, }} >{ call.name } is calling: </h1>
            <Button variant='contained' color='primary' onClick={answerCall} 
              sx={{
                marginLeft: '20px',
                backgroundColor: '#55B4B0',
                '&:hover': { backgroundColor: '#98B4D4' }
              }}
            >
              Answer
            </Button>
          </div>  
        ) }
    </>
  )
}

export default Notifications ;