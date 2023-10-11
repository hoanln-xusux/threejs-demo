import { Environment } from "@react-three/drei";
import { RGBELoader } from "three-stdlib";
import { EquirectangularReflectionMapping } from "three";
import { useLoader } from "@react-three/fiber";

//ENVIRONMENT
function Environment3D() {
  const enviro = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr"
  );
  enviro.mapping = EquirectangularReflectionMapping;

  return (
    <>
      <Environment map={enviro} />
    </>
  );
}
//

export default Environment3D;
