import { useLoader } from "@react-three/fiber";
import { Suspense, useContext } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF } from "@react-three/drei";
import { SceneObject } from "./SceneObject";
import { useSnapshot } from "valtio";
import { EditorState, onModelAdded } from "../State";
import { EditorContext } from "../EditorContext";

export function ModelImporter() {
  const { editor } = useContext(EditorContext);
  useSnapshot(EditorState.onModelAdded);
  console.log(editor.models);
  return Object.keys(editor.models).map((key, index) => {
    const scene = editor.models[key].scene;
    scene.type = "Model";
    return (
      <Suspense key={index} fallback={null}>
        <SceneObject object={scene} index={0}></SceneObject>
        {/* <primitive object={gltf.scene} /> */}
      </Suspense>
    );
  });
}
