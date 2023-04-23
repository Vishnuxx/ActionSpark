import {
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Heading,
  Accordions,
  Container,
  Box,
  Flex,
} from "@chakra-ui/react";
import { proxy, useSnapshot } from "valtio";
import { editorOpened, UIEditorState } from "../SceneEditor/State";
import { JoystickController } from "./UIComponents/UIJoystickController";
import { Draggable } from "drag-react";

import { useEffect, useState } from "react";
import { EditorBase } from "../Models/UIEditorBase";
import { UIEditorActions } from "../Models/UIEditorActions";

const editorBase = new EditorBase();
const actions = new UIEditorActions(editorBase);

export function UIEditor() {
  const snap = useSnapshot(editorOpened);

  console.log(snap.state);

  const close = () => {
    editorOpened.state = false;
  };

  const onEnd = (e) => {
    console.log(e);
  };

  const addComponent = () => {
    actions.addComponent("joystick");
  };
  return (
    snap.state && (
      <Box
        bg={"rgb(10, 10, 10 , 0.5)"}
        position={"absolute"}
        width={"100vw"}
        height={"100vh"}
        top={0}
        left={0}
      >
        <Flex
          w={"fit-content"}
          h={"50px"}
          bg={"black"}
          padding="3"
          justifyContent="start"
          alignItems="center"
        >
          <Button m={"3px 3px"} size="sm" onClick={close}>
            X
          </Button>
          <Button m={"3px 3px"} bg="green" size="sm" onClick={addComponent}>
            Add
          </Button>
        </Flex>

        <UIEditingPanel></UIEditingPanel>
      </Box>
    )
  );
}

function UIEditingPanel() {
  const components = useSnapshot(UIEditorState.uIComponentAdded);
  console.log(editorBase.components);
  return (
    <Box>
      {editorBase.components.map((elem, index) => {
        const obj = editorBase.components[index];
        return (
          <JoystickController key={index} object={obj}></JoystickController>
        );
      })}
    </Box>
  );
}
