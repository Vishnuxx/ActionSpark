import { Button } from "@chakra-ui/react";
import { editorOpened } from "../State";

export function UIEditorButton() {

  const open = () => {
    editorOpened.state = true;
  };
  return (
    <>
      <Button
        position="absolute"
        bottom={0}
        left={0}
        bg="#262626"
        color={"white"}
        m={"3px 3px"}
        size={"sm"}
        onClick={open}
      >
        UI Editor
      </Button>
    </>
  );
}
