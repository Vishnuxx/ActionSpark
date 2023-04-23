import { Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { EditorContext } from "../EditorContext";

export function UndoRedoButton() {
  const { editor } = useContext(EditorContext);

  const undo = () => {
    editor.undo();
  };

  const redo = () => {
    editor.redo();
  };
  return (
    <Flex>
      <Button onClick={undo}>Undo</Button>
      <Button onClick={redo}>Redo</Button>
    </Flex>
  );
}
