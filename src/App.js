import React from 'react';
import { useUnityContext } from 'react-unity-webgl';
import { Box } from '@mui/system';
import { Button, CircularProgress, Container, Typography } from '@mui/material';

import UnityLayout from './layouts/UnityLayout';

import { herd_sim } from './stubs/herd_sim'


const App = () => {
  const { requestFullscreen, isLoaded, loadingProgression, ...game } = useUnityContext(herd_sim);

  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }

  console.log('isLoaded', isLoaded);
  console.log('loadingProgression', loadingProgression);

  return (
    <Box sx={{ height: '100vh' }}>
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
      {isLoaded ?
        <Button variant="contained" color="primary" onClick={handleClickEnterFullscreen} sx={{
          position: "fixed",
          pointerEvents: 'auto',
          top: 20,
        }}>Enter Fullscreen</Button> : <Container maxwidth="lg" sx={{
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
        <CircularProgress color="primary" size={'6em'} />
        <Typography color="primary" variant="body1" sx={{
          display: 'flex',
          fontSize: 'h4.fontSize',
          position: "fixed",
          pointerEvents: 'auto',
        }}>{Math.floor((loadingProgression) * 100)}<span style={{
          fontSize: "0.5em",
          position: "absolute",
          right: "-0.75em",
        }}>%</span></Typography>
        </Container>}
      </Container>
    </Box>
  )
}

export default App;