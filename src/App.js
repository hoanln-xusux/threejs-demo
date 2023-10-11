import "./styles.scss";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import React, { createContext, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import BottomBar from "./Bottombar";
import Camera from "./Camera";
import Lights from "./Lights";
import Environment3D from "./Environment";
import OrbitController from "./OrbitControls";
import Camicia from "./Camicia";
import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

export const TextureContext = createContext();

const App = () => {
  const [print, setPrint] = useState("./textures/a001.png");

  const printTexture = useLoader(TextureLoader, print);
  printTexture.wrapS = printTexture.wrapT = THREE.RepeatWrapping;
  printTexture.repeat.set(10, 10);
  printTexture.flipY = false;

  return (
    <TextureContext.Provider value={{ print, setPrint }}>
      <div className="page-wrapper full-height">
        <div className="inner-content full-height">
          <div id="top-bar">
            <div className="row text-center">{print}</div>
          </div>

          <div id="bottom-bar">
            <div className="row text-center">
              <BottomBar />
            </div>
          </div>

          <div id="content">
            <Canvas id="three-canvas-container">
              <Camera />

              <OrbitController />
              <Environment3D />
              <Lights />
              <Suspense fallback={<Loader />}>
                <Camicia customPrint={{ tex: printTexture }} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </TextureContext.Provider>
  );
};

export default App;
