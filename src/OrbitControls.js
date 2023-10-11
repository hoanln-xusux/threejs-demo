import { OrbitControls } from "@react-three/drei";
import { angleToRadians } from "./utils/angle";
import React, { useRef } from "react";

//ORBIT CONTROLS
function OrbitController() {
  // orbit control
  const orbitControlsRef = useRef(null);
  return (
    <>
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(60)}
        maxPolarAngle={angleToRadians(80)}
        minDistance={0.4}
        maxDistance={1}
      />
    </>
  );
}
//

export default OrbitController;
