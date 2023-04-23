import { Select } from "@chakra-ui/react";
import { useContext } from "react";
import { useSnapshot } from "valtio";
import { EditorContext } from "../EditorContext";
import { EditorState, onObjectAdded } from "../State";

export function CameraSelector() {
  const { editor } = useContext(EditorContext);
  const snap = useSnapshot(EditorState.onObjectAdded);
  const cameraKeys = Object.keys(editor.cameras);

  const setCamera = (e) => {
    editor.actions.setCurrentCamera(e.target.value);
  };
  return (
    <Select
      placeholder="Select option"
      color={"white"}
      bg="#262626"
      border={"orange"}
      onChange={setCamera}
    >
      {cameraKeys.map((key, index) => {
        return (
          <option key={index} value={key}>
            Camera{index}
          </option>
        );
      })}
    </Select>
  );
}
