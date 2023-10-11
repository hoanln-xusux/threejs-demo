import "./styles.scss";
import React, { Suspense, useRef } from "react";
import * as THREE from "three";
import { useGLTF, Html, useProgress } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

// CAMICIA
const Camicia = ({ ...props }) => {
  function Loader() {
    const { progress } = useProgress();
    return <Html center>{progress} % loaded</Html>;
  }

  const group = useRef();
  const { nodes } = useGLTF("/camicia-transformed.glb");

  // texture modello camicia
  //urls
  const normalM = "/camicia_normal.png";
  const colorM = "/camicia_diffuse.png";
  const roughM = "/camicia__metallicroughness.png";
  //const
  const [colorMap, normalMap, roughnessMap] = useLoader(TextureLoader, [
    colorM,
    normalM,
    roughM
  ]);

  colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping;
  colorMap.repeat.set(1, 1);
  colorMap.flipY = false;
  normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
  normalMap.repeat.set(1, 1);
  normalMap.flipY = false;
  roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping;
  roughnessMap.repeat.set(1, 1);
  roughnessMap.flipY = false;

  //materiale
  const tessuto = new THREE.MeshStandardMaterial({
    side: THREE.DoubleSide,
    normalMap: normalMap,
    metalnessMap: roughnessMap,
    map: colorMap
  });

  const bottoni = new THREE.MeshPhongMaterial({
    color: "#000000",
    side: THREE.DoubleSide
  });

  return (
    <group ref={group} {...props} dispose={null} position={[0, -1.3, 0]}>
      <Suspense fallback={<Loader />}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh.geometry}
          material={tessuto}
          material-map={props.customPrint.tex}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_1.geometry}
          material={tessuto}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_2.geometry}
          material={tessuto}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_3.geometry}
          material={tessuto}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_4.geometry}
          material={tessuto}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_5.geometry}
          material={tessuto}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_6.geometry}
          material={tessuto}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_7.geometry}
          material={tessuto}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_8.geometry}
          material={tessuto}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_9.geometry}
          material={tessuto}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_10.geometry}
          material={tessuto}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_11.geometry}
          material={tessuto}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes._mesh_1.geometry}
          material={bottoni}
          position={[0, 1.14, 0.1]}
          rotation={[1.24, 0.79, 0.37]}
          scale={[0.5, 1, 0.5]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes._mesh_2.geometry}
          material={bottoni}
          position={[0, 1.55, 0.02]}
          rotation={[1.16, -0.04, -0.02]}
          scale={[0.5, 1, 0.5]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes._mesh_3.geometry}
          material={bottoni}
          position={[0, 1.03, 0.1]}
          rotation={[1.56, -0.11, 0.53]}
          scale={[0.5, 1, 0.5]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes._mesh_4.geometry}
          material={bottoni}
          position={[0, 1.35, 0.07]}
          rotation={[1.43, -0.05, 0.1]}
          scale={[0.5, 1, 0.5]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes._mesh_5.geometry}
          material={bottoni}
          position={[0, 1.24, 0.09]}
          rotation={[1.45, -0.24, 0.03]}
          scale={[0.5, 1, 0.5]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes._mesh_6.geometry}
          material={bottoni}
          position={[0, 1.45, 0.05]}
          rotation={[1.33, 0.19, -0.03]}
          scale={[0.5, 1, 0.5]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes._mesh_7.geometry}
          material={bottoni}
          position={[-0.29, 1.05, -0.07]}
          rotation={[1.33, -0.13, 2.34]}
          scale={[0.5, 1, 0.5]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes._mesh_8.geometry}
          material={bottoni}
          position={[0.29, 1.05, -0.07]}
          rotation={[1.42, -0.03, -2.38]}
          scale={[0.5, 1, 0.5]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes._mesh_9.geometry}
          material={bottoni}
          position={[0.29, 0.98, -0.04]}
          rotation={[1.53, -0.04, -2.3]}
          scale={[0.5, 1, 0.5]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes._mesh_10.geometry}
          material={bottoni}
          position={[-0.29, 0.98, -0.05]}
          rotation={[1.34, -0.14, 2.35]}
          scale={[0.5, 1, 0.5]}
        />
      </Suspense>
    </group>
  );
};
//

useGLTF.preload("/camicia-transformed.glb");
// material-map={props.customPrint.print}
// material-color={props.buttonCol.color}

export default Camicia;
