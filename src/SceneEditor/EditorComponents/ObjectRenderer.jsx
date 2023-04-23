import { useContext } from "react";
import { useSnapshot } from "valtio";
import { EditorContext } from "../EditorContext";

import { EditorState, onObjectAdded } from "../State";
import { SceneObject } from "./SceneObject";

export function ObjectRenderer() {
  const { editor } = useContext(EditorContext);
  const snap = useSnapshot(EditorState.onObjectAdded);

  const meshes = [...editor.objects];

  //console.log("")

  return (
    <group>
      <SceneObjects editor={editor} objects={meshes}></SceneObjects>
    </group>
  );
}

function SceneObjects({ editor, objects }) {
  return objects.map((object, index) => {
    switch (object.type) {
      default:
        return (
          <SceneObject
            editor={editor}
            key={index}
            object={object}
            index={index}
          >
            <SceneObjects objects={[...object.children]}></SceneObjects>
          </SceneObject>
        );
    }
  });
}
