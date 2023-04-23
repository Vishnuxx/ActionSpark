import { useContext, useRef } from "react";
import { EditorContext } from "../EditorContext";
import { EditorState } from "../State";

export function Helper({ helperObj }) {
  const {editor , actions} = useContext(EditorContext)
  const mesh = useRef();

  const click = (e) => {
    e.stopPropagation();
    actions.selectObjectByID(helperObj.userData.objectId);
    // EditorState.transformMode.currentObjectID = helperObj.userData.objectId;
    // EditorState.transformMode.currentObjectUUID = helperObj.userData.objectUUID;
    helperObj.update();
    //helperObj.visible = true;
  };

  const missed = (e) => {
    e.stopPropagation();
    EditorState.transformMode.currentObjectID = null;
    EditorState.transformMode.currentObjectUUID = null;
    //helperObj.visible = false;
  };

  // console.log(helperObj);

  if (
    [
      "DirectionalLightHelper",
      "CameraHelper",
      "PointLightHelper",
      "DirectionalLightHelper",
      "SpotLightHelper",
    ].includes(helperObj.type)
  ) {
    return (
      <primitive
        ref={mesh}
        object={helperObj}
        //   onClick={click}
        //   onPointerMissed={missed}
      >
        <mesh onClick={click} onPointerMissed={missed} visible={true}>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial color={"orange"} />
        </mesh>
      </primitive>
    );
  } else {
    return (
      <primitive
        ref={mesh}
        object={helperObj}
        onClick={click}
        onPointerMissed={missed}
      ></primitive>
    );
  }
}
