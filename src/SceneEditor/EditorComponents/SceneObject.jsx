import { useContext, useEffect, useRef } from "react";
import { useSnapshot } from "valtio";
import { transformMode } from "../State";
import {
  Box3Helper,
  BoxHelper,
  CameraHelper,
  DirectionalLightHelper,
  Mesh,
  Object3D,
  PointLightHelper,
  SpotLightHelper,
} from "three";
import { useHelper } from "@react-three/drei";
import { EditorContext } from "../EditorContext";

export function SceneObject({ object, index, children }) {
  const mesh = useRef();

  return (
    <primitive
      ref={mesh}
      dispose={null}
      key={index}
      object={object}
      name={object.name}
    >
      {children}
    </primitive>
  );
}
