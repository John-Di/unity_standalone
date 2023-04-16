import React from 'react';
import { useUnityContext } from 'react-unity-webgl';
import { Box } from '@mui/system';
import { Button, CircularProgress, Container, Typography } from '@mui/material';

import UnityLayout from './layouts/UnityLayout';

const App = () => {
  const gameName = process.env.REACT_APP_GAME;
  const gameData = {
    loaderUrl: `unity/${gameName}/Build/${gameName}.loader.js`,
    dataUrl: `unity/${gameName}/Build/${gameName}.data`,
    frameworkUrl: `unity/${gameName}/Build/${gameName}.framework.js`,
    codeUrl: `unity/${gameName}/Build/${gameName}.wasm`,
  };
  const { requestFullscreen, isLoaded, loadingProgression, ...game } = useUnityContext(gameData);

  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      height="100vh"
      width="100vw">
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