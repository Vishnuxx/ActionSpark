import { Flex, Button, HStack } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { SceneObjects, SceneObjectsRenderer } from "./3dComponents/SceneObjects";
import { PlayerControls } from "./Components/PlayerControls";

export function PreviewPlayer({ editor }) {
  return (
    <Flex h="100vh" w="100vw">
      <Canvas shadows style={{ background: "#0d1921" }}>
        <gridHelper></gridHelper>
    
          <SceneObjects editor={editor}></SceneObjects>
       
      </Canvas>
      <PlayerControls></PlayerControls>
    </Flex>
  );
}
