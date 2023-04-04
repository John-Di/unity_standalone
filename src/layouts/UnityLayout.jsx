import React from 'react';
import { Unity } from "react-unity-webgl";

const UnityLayout = ({ game }) => {
  const { unityProvider } = game;

  return <Unity
    unityProvider={unityProvider}
    style={{
      visibility: "visible",
      width: "100%",
      height: "100%"
    }}
  />;
}

export default UnityLayout;