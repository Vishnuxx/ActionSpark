import { extend, useThree } from "@react-three/fiber";
import { useContext, useEffect, useRef } from "react";
import { useSnapshot } from "valtio";
import { EditorState } from "../State";

import { OrbitControls, Select, TransformControls } from "@react-three/drei";
import { EditorContext } from "../EditorContext";

export function Controls() {
  const { editor } = useContext(EditorContext);
  const transformMode = useSnapshot(EditorState.transformMode);
  const transCtrls = useRef();
  let helper = editor.getHelperById(transformMode.currentObjectUUID);

  const update = () => {
    helper.update();
  };

  useEffect(() => {
    if (transCtrls.current != undefined || transCtrls.current != null) {
      console.log(transformMode.currentObjectUUID);
      if (transformMode.currentObjectUUID !== null) {
        transCtrls.current.attach(
          editor.scene.getObjectByProperty(
            "uuid",
            transformMode.currentObjectUUID
          )
        );
      } else {
        console.log(transCtrls.current);
        transCtrls.current.detach();
      }
      transCtrls.current.setMode(transformMode.mode);
    }

    return () => {};
  }, [transformMode]);

  return (
    <group>
      {/* As of drei@7.13 transform-controls can refer to the target by children, or the object prop */}
      {transformMode.currentObjectID && (
        <TransformControls ref={transCtrls} onObjectChange={update} />
      )}
      {/* makeDefault makes the controls known to r3f, now transform-controls can auto-disable them when active */}
      <OrbitControls
        rotateSpeed={0.3}
        makeDefault
        enableDamping={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.75}
      />
    </group>
  );
}
