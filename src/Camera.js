import { PerspectiveCamera } from "@react-three/drei";

//CAMERA
function Camera() {
  return <PerspectiveCamera makeDefault position={[0, 0, 3]} />;
}
//
export default Camera;
