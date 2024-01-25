import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext'
import { Button } from '@mui/base';

const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
          {call.isRecievedCall && !callAccepted && (
              <div style={{display:'flex', justifyContent:'center'}}>
                  <h1>{call.name} veut rejoindre l'appel</h1>
                  <Button variant="contained" color="primary" onClick={answerCall}>Accepter</Button>
              </div>
      )}
    </>
  )
}

export default Notifications
