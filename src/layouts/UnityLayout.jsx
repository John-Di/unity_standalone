import React from 'react';
import { Unity } from "react-unity-webgl";

const UnityLayout = ({ game }) => {
  const { unityProvider, isLoaded } = game;

  return <Unity
    unityProvider={unityProvider}
    style={{
      visibility: isLoaded ? "visible" : "hidden",
      width: "100%",
      height: "100%"
    }}
  />;
}

export default UnityLayout;