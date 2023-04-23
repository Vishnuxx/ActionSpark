import { Center } from "@chakra-ui/react";
import {
  Canvas,
  useLoader,
  useThree,
  useRender,
  render,
  useFrame,
} from "@react-three/fiber";
import { ObjectRenderer } from "../EditorComponents/ObjectRenderer";
import { Controls } from "../EditorComponents/Controls";
import { ModelImporter } from "../EditorComponents/ModelImporter";
import { Environment } from "@react-three/drei";
import { EquirectangularReflectionMapping, Scene, TextureLoader } from "three";
import { useContext, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Perf } from "r3f-perf";
import { EditorState, onCameraChanged, onObjectAdded, onProjectedLoaded } from "../State";
import { useSnapshot } from "valtio";
import { HelperRenderer } from "../EditorComponents/HelperRenderer";
import { SkyBackground } from "../EditorComponents/SkyBackground";
import { EditorContext } from "../EditorContext";

export function Viewport() {
  // console.log("viewport");
  const {editor} =  useContext(EditorContext);

  return (
    <Center w="100%" h="100%" alignItems="start">
      <Canvas shadows frameloop="demand" style={{ background: "#0d1921" }}>
        {/* <Perf /> */}

        <MainScene editor={editor} />
        <CameraManager editor={editor}></CameraManager>

        {/* <SkyBackground></SkyBackground>
        <gridHelper></gridHelper>
        <ambientLight intensity={0.25} />
        <pointLight color="white" intensity={1} position={[1, 1, 1]} />

        
        <ModelImporter editor={editor}></ModelImporter> */}
        <SkyBackground></SkyBackground>
        <gridHelper material-linewidth={1}></gridHelper>
        <Controls editor={editor} />

        <HelperRenderer editor={editor}></HelperRenderer>
      </Canvas>
    </Center>
  );
}

function MainScene() {
  const { editor } = useContext(EditorContext);
  const snap = useSnapshot(EditorState.onObjectAdded);
  const scene = useRef();
  const three = useThree();
  useEffect(() => {
    editor.scene = scene.current; //three.scene;

    editor.setDefaultCamera(three.camera);
  }, []);

  useFrame(({ gl, scene, camera }) => {
    gl.render(scene, editor.currentCamera);

    gl.render(editor.sceneHelpers, editor.currentCamera);
  }, 0);

  console.log(three.gl.info.memory);
  return (
    <scene ref={scene}>
      <ObjectRenderer editor={editor} />
    </scene>
  );
}

function CameraManager() {
  const { editor } = useContext(EditorContext);
  const three = useThree();
  const snap = useSnapshot(EditorState.onCameraChanged);
  useEffect(() => {
    three.set({ camera: editor.currentCamera });
  }, [snap]);
}
