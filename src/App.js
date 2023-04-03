import React from 'react';
import { useUnityContext } from 'react-unity-webgl';
import { Button, Container } from '@mui/material';

import UnityLayout from './layouts/UnityLayout';

import { herd_sim } from './stubs/herd_sim'


const App = () => {
  const { requestFullscreen, ...game } = useUnityContext(herd_sim);

  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }

  return (
    <Container maxwidth="lg" sx={{ height: '100vh' }}>
      <UnityLayout game={game} />
      <Container maxwidth="lg" sx={{
          position: "absolute",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          pointerEvents: 'none',
          zIndex: 1,
        }}>
        <Button variant="contained" color="primary" onClick={handleClickEnterFullscreen} sx={{
          position: "fixed",
          pointerEvents: 'auto',
          top: 20,
        }}>Enter Fullscreen</Button>
      </Container>
    </Container>
  )
}

export default App;