import { useContext, useEffect } from "react";
import { useSnapshot } from "valtio";
import { EditorState, propertiesBarOpened, transformMode } from "../State";
import { Button } from "@chakra-ui/react";
import { EditorContext } from "../EditorContext";

export function EditPropertiesButton() {
  const { editor } = useContext(EditorContext);
  const click = () => {
    EditorState.propertiesBarOpened.state = true;
  };

  return (
    <Button
      size={"md"}
      margin={"3px"}
      background="#04d484"
      //   boxShadow="0px 10px 20px 1px grey"
      color="white"
      borderRadius="20px"
      onClick={click}
    >
      Behaviours
    </Button>
  );
}
