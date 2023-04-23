import { useContext, useLayoutEffect } from "react";
import { useEffect, useRef } from "react";
import { useSnapshot } from "valtio";
import { EditorContext } from "../EditorContext";
import { EditorState } from "../State";
import { Helper } from "./Helper";

export function HelperRenderer() {
  const { editor } = useContext(EditorContext);
  const objectAdded = useSnapshot(EditorState.onObjectAdded);
 
  return (
    <group name="BoxHelpers">
      {Object.keys(editor.helpers).map((key, index) => {
        return (
          <Helper
            key={index}
            editor={editor}
            helperObj={editor.helpers[key]}
          ></Helper>
        );
      })}
    </group>
  );
}
