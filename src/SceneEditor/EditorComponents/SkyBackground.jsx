import { useLoader, useThree } from "@react-three/fiber";
import { useMemo } from "react";
import { EquirectangularReflectionMapping, TextureLoader } from "three";


export function SkyBackground() {
  const colorMap = useLoader(TextureLoader, "sky4.png");
  const scene = useThree().scene;
  useMemo(() => {
    colorMap.mapping = EquirectangularReflectionMapping;
    scene.background = colorMap;
  }, []);

  return null;
}